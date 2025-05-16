const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3012


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb+srv://souravsahoo7205129310:UWv7MSZP5FKfm7V@email-go.q1gms.mongodb.net/?retryWrites=true&w=majority&appName=email-go')
const db = mongoose.connection
db.once('open',()=>{
   console.log("Mongodb connection sucessfully done !")
})

const userSchema = new mongoose.Schema({
     name:String,
     email:String,
     phone:Number,
     subject:String,
     message:String
})

const Users = mongoose.model("data",userSchema)


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public'))
})

app.post('/post',async(req,res)=>{
    const {name,email,phone,subject,message} = req.body
   const user = new Users({
    name,
    email,
    phone,
    subject,
    message
   })
   await user.save()
   console.log(user)
   res.send("form Submission Sucess full !")




})





app.listen(port,()=>{
    console.log("server started at port" + port)
})
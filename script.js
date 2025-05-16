const leftEye = document.querySelector('.left-eye .iris');
const rightEye = document.querySelector('.right-eye .iris');

document.addEventListener('mousemove', (event) => {
    const leftEyeRect = document.querySelector('.left-eye').getBoundingClientRect();
    const rightEyeRect = document.querySelector('.right-eye').getBoundingClientRect();

    const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
    const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;

    const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
    const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate angle for left eye
    const angleXLeft = mouseX - leftEyeCenterX;
    const angleYLeft = mouseY - leftEyeCenterY;
    const distanceLeft = Math.min(35, Math.sqrt(angleXLeft * angleXLeft + angleYLeft * angleYLeft));
    const angleLeft = Math.atan2(angleYLeft, angleXLeft);
    const irisXLeft = Math.cos(angleLeft) * distanceLeft;
    const irisYLeft = Math.sin(angleLeft) * distanceLeft;

    // Calculate angle for right eye
    const angleXRight = mouseX - rightEyeCenterX;
    const angleYRight = mouseY - rightEyeCenterY;
    const distanceRight = Math.min(35, Math.sqrt(angleXRight * angleXRight + angleYRight * angleYRight));
    const angleRight = Math.atan2(angleYRight, angleXRight);
    const irisXRight = Math.cos(angleRight) * distanceRight;
    const irisYRight = Math.sin(angleRight) * distanceRight;

    // Apply translation to irises
    leftEye.style.transform = `translate(${irisXLeft}px, ${irisYLeft}px)`;
    rightEye.style.transform = `translate(${irisXRight}px, ${irisYRight}px)`;
});









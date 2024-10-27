export function animateSpeedometer(targetSpeeds) {
    const speedDisplay = document.getElementById('speed');

    const randomTarget = targetSpeeds[Math.floor(Math.random() * targetSpeeds.length)];
    const targetSpeed = randomTarget.target;
    const intervalTime = randomTarget.time;

    let currentSpeed = 200;
    const speedInterval = setInterval(() => {
        if (currentSpeed >= targetSpeed) {
            clearInterval(speedInterval);
        } else {
            currentSpeed += 5;  
            speedDisplay.firstElementChild.textContent = currentSpeed;
        }
    }, intervalTime);  
}
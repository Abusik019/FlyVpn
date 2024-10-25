export function animateSpeedometer(targetSpeed) {
    const speedDisplay = document.getElementById('speed');

    let currentSpeed = 0;
    const speedInterval = setInterval(() => {
        if (currentSpeed >= targetSpeed) {
            clearInterval(speedInterval);
        } else {
            currentSpeed += 5;  
            speedDisplay.firstElementChild.textContent = currentSpeed;
        }
    }, 56);  
}
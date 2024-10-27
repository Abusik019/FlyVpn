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

    const style = document.createElement('style');
    style.type = 'text/css';

    // Определяем анимацию keyframes
    const keyframes = `
    @keyframes rotateNeedle {
        0% {
            transform: rotate(-140deg);
        }
        100% {
            transform:  rotate(140deg);     
        }
    }
    `;

    // Добавляем keyframes в стиль
    style.innerHTML = keyframes;

    // Добавляем элемент стиля в head
    document.head.appendChild(style);
}
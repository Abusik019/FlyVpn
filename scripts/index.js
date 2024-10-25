import { animateSpeedometer } from './utils/animateSpeedometer.js';

const   changePictureBtn = document.getElementById('change-picture'),
        protectImage = document.getElementById('start-now_img'),
        line1 = document.getElementById('line_1'),
        line2 = document.getElementById('line_2');

        
changePictureBtn.addEventListener("mouseenter", () => {
    protectImage.style.opacity = '0'; 
    setTimeout(() => {
        protectImage.src = "../assets/images/tg-replace.png";
        protectImage.style.opacity = '1'; 
    }, 500); 
    line1.style.backgroundColor = '#212121';
    line2.style.backgroundColor = '#fff';
})

window.onload = function() {
    animateSpeedometer(362);  
};


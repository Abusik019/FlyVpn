import { animateSpeedometer } from './utils/animateSpeedometer.js';

const targetSpeeds = [
    {
        target: 360,
        time: 130,
    },
    {
        target: 435,
        time: 100,
    },
    {
        target: 325,
        time: 160,
    },
    {
        target: 470,
        time: 80,
    },
    {
        target: 630,
        time: 50,
    },
    {
        target: 670,
        time: 45,
    },
    {
        target: 650,
        time: 47.5,
    },
    {
        target: 540,
        time: 65,
    },
    {
        target: 455,
        time: 85,
    },
    {
        target: 430,
        time: 97,
    },
    {
        target: 510,
        time: 75,
    },
]

animateSpeedometer(targetSpeeds);  

const   changePictureBtn = document.getElementById('change-picture'),
        protectImage = document.getElementById('start-now_img'),
        line1 = document.getElementById('line_1'),
        line2 = document.getElementById('line_2');
        
    
// Start now section
changePictureBtn.addEventListener("mouseenter", () => {
    protectImage.style.opacity = '0'; 
    setTimeout(() => {
        protectImage.src = "../assets/images/tg-replace.png";
        protectImage.style.opacity = '1'; 
    }, 500); 
    line1.style.backgroundColor = '#212121';
    line2.style.backgroundColor = '#fff';
})



// Dropdown
document.querySelectorAll('.dropdown_pictures > li').forEach(item => {
    item.querySelector('button').addEventListener('click', () => {
        const video = item.nextElementSibling;
        const arrowIcon = item.querySelector('button img');

        if (!video.classList.contains('show')) {
            video.classList.add('show');
            arrowIcon.src = '../assets/images/icons/open-arrow.svg'; 
        } else {
            video.classList.remove('show');
            arrowIcon.src = '../assets/images/icons/close-arrow.svg'; 
        }
    });
});


// Burger menu
// const burgerBtn = document.querySelector('.burger-menu');

// burgerBtn?.addEventListener('click', () => {

// })

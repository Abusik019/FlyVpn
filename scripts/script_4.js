const   changePictureBtn = document.getElementById('change-picture'),
        protectImage = document.getElementById('start-now_img'),
        line1 = document.getElementById('line_1'),
        line2 = document.getElementById('line_2');
        

// Start now section
changePictureBtn.addEventListener("mouseenter", () => {
    protectImage.style.opacity = '0'; 
    setTimeout(() => {
        protectImage.src = "../assets/images/blue-tg-replace.png";
        protectImage.style.opacity = '1'; 
    }, 500); 
    line1.style.backgroundColor = 'rgba(218, 218, 218, 1)';
    line2.style.backgroundColor = 'rgba(19, 26, 41, 1)';
})



// Dropdown
document.querySelectorAll('.dropdown_pictures > li').forEach(item => {
    item.addEventListener('click', () => {
        const video = item.nextElementSibling;
        const arrowIcon = item.querySelector('button img');

        if (!video.classList.contains('show')) {
            video.classList.add('show');
            arrowIcon.src = '../assets/images/icons/light-open-arrow.svg'; 
        } else {
            video.classList.remove('show');
            arrowIcon.src = '../assets/images/icons/light-close-arrow.svg'; 
        }
    });
});


// Burger menu
const burgerBtn = document.querySelector('.burger-menu');
const navItems = document.querySelector('.nav_items');
const btnImg = burgerBtn.firstChild;
// Stop scroll function
const scrollHandler = () => {
    window.scrollTo({ top: 0 });
};

burgerBtn?.addEventListener('click', () => {
    navItems.classList.toggle('open'); 
        
    if(navItems.classList.contains('open')){
        btnImg.src ='../assets/images/icons/light-krestik.svg';
        window.addEventListener('scroll', scrollHandler)
    } else{
        btnImg.src ='../assets/images/icons/light-burger-menu.svg'
        window.removeEventListener('scroll', scrollHandler)
    }
})
 
document.querySelectorAll('.nav_items > li').forEach(item => {
    item.addEventListener('click', () => {
        navItems.classList.remove('open');
        btnImg.src ='../assets/images/icons/light-burger-menu.svg'
        window.removeEventListener('scroll', scrollHandler)
    })
})
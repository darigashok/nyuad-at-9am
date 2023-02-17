const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


let id = 0;

/*hamburger menu implementation for non-desktop screens*/
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) { /*change background color of nav bar/ header when scroll_position goes below first opened website frame*/
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent'; /*header is transparent (same as background image) at first when the website is opened*/
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active'); /*keep status of active menu choice upon click*/
		mobile_menu.classList.toggle('active');
	});
});

/* JS script for image slider*/
let slides = document.getElementsByClassName("image_slider__slide");
let navlinks = document.getElementsByClassName("image_slider__navlink");
let currentSlide = 0;

/*call function changeSlide with passing argument of destination image index*/
document.getElementById("image_nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("image_nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;} /* return to first, if the current image is the last one*/
    if (moveTo < 0) {moveTo = slides.length - 1;} /* go to last image, if the current image is the first*/
    
    slides[currentSlide].classList.toggle("active"); /*update status of links*/
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.image_slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) { /*if user clicks on bullet, change slide to the newly selected bullet if different*/
            changeSlide(bulletIndex);
        }
    })
})
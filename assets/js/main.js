console.log("Main JS Loaded");



/* ==========================================
   HERO REVEAL ANIMATION
========================================== */

const reveals = document.querySelectorAll(".reveal, .reveal-image");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.2
});

reveals.forEach((item) => {
    observer.observe(item);
});


/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});


/* ==========================================
   TESTIMONIAL SWIPER
========================================== */


const swiper = new Swiper(".testimonialSwiper", {

    loop:true,

    spaceBetween:30,

    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

    breakpoints:{
        0:{
            slidesPerView:1,
        },

        768:{
            slidesPerView:2,
        },

        1200:{
            slidesPerView:3,
        }
    }

});



console.log("Main JS Loaded");

/* ==========================================
   LENIS SMOOTH SCROLL
========================================== */

const lenis = new Lenis({
    duration: 1.6,
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 1.2,
    infinite: false
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 60){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});


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

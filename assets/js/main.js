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

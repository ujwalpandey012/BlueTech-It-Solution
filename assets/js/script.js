/* ======================================================
   MOBILE MENU
====================================================== */
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

// Close menu after clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
});


/* ======================================================
   WAVE LOADING PRELOADER
====================================================== */
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    // Fade-out
    preloader.style.opacity = "0";

    // Remove after fade animation
    setTimeout(() => preloader.style.display = "none", 600);
});


/* ======================================================
   SMOOTH FADE-IN ON PAGE LOAD
====================================================== */
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});


/* ======================================================
   OPTIONAL: SCROLL REVEAL ANIMATIONS
====================================================== */
const revealElements = document.querySelectorAll(".card, .port-card, h1, h2, p");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "all 0.8s ease-out";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

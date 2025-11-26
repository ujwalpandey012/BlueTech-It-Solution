// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Close menu on click
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
});

// PRELOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 300);
});

// SCROLL REVEAL ANIMATIONS
const revealElements = document.querySelectorAll(
    ".fade-in, .slide-up, .service-card, .pricing-card, .project-card, .page-section"
);

function reveal() {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight - 80;

        if (elementTop < windowHeight) {
            el.classList.add("show");
        }
    });
}

// Run when scrolling
window.addEventListener("scroll", reveal);

// Run on page load
reveal();

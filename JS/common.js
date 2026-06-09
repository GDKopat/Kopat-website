// common.js - работает на ВСЕХ страницах

const heroImage = document.getElementById('heroImage');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (heroImage) heroImage.classList.add('show');
    }, 500);
});

window.addEventListener('scroll', () => {
    if (!heroImage) return;
    const scrollPosition = window.scrollY;
    const heroHeight = window.innerHeight;
    const maxScale = 1.5;
    
    let scale = 1 + (scrollPosition / heroHeight) * (maxScale - 1);
    if (scale > maxScale) scale = maxScale;
    if (scale < 1) scale = 1;
    
    heroImage.style.transform = `scale(${scale})`;
});

const animatedElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });
animatedElements.forEach(element => {
    observer.observe(element);
});
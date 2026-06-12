// common.js - ВСЁ СТАРОЕ РАБОТАЕТ + КНОПКА

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
    const maxScale = 1.7;
    
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

// ========== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА - ИСПРАВЛЕНО ==========
function switchLanguage() {
    let path = window.location.pathname;   // например, "/Kopat-website/index.html" или "/Kopat-website/about.html"
    let lastSlash = path.lastIndexOf('/');
    let dir = path.substring(0, lastSlash + 1);  // "/Kopat-website/"
    let file = path.substring(lastSlash + 1);    // "index.html", "about.html" или "" (если корень)
    
    // Если корень сайта (пустое имя файла) → считаем что это index.html
    if (file === "") {
        file = "index.html";
    }
    
    // Переключаем
    if (file.startsWith("eng-")) {
        file = file.replace("eng-", "");   // убираем eng-
    } else {
        file = "eng-" + file;              // добавляем eng-
    }
    
    // Склеиваем и переходим
    window.location.href = dir + file;
}

// Подключаем кнопку
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn-center .btn');
    if (btn) {
        btn.onclick = switchLanguage;
    }
});

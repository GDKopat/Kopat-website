// common.js - старый код + правильная кнопка

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

// ========== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА (ИСПРАВЛЕНО) ==========
function switchLanguage() {
    let currentUrl = window.location.href;
    let baseUrl = 'https://gdkopat.github.io/Kopat-website/';
    
    // Если на английской версии (в URL есть eng- перед именем файла)
    if (currentUrl.includes('/eng-')) {
        // Переход на русскую: убираем eng-
        let newUrl = currentUrl.replace('/eng-', '/');
        window.location.href = newUrl;
    } else {
        // Переход на английскую: добавляем eng- перед именем файла
        let fileName = 'index.html';
        if (currentUrl.includes('about.html')) {
            fileName = 'about.html';
        }
        window.location.href = baseUrl + 'eng-' + fileName;
    }
}

// Подключаем кнопку
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.querySelector('.btn-center .btn');
    if (langBtn) {
        langBtn.onclick = switchLanguage;
    }
});

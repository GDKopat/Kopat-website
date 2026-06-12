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


// Переключение языка (редирект на eng-страницы)
function switchLanguage() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop(); // получаем имя файла (например, index.html или about.html)
    
    // Проверяем, находимся ли мы уже на английской версии
    const isEnglish = fileName.startsWith('eng-');
    
    if (isEnglish) {
        // Переключаем на русскую версию (убираем eng-)
        let newFile = fileName.replace('eng-', '');
        window.location.href = newFile;
    } else {
        // Переключаем на английскую версию (добавляем eng-)
        window.location.href = 'eng-' + fileName;
    }
}

// Инициализация кнопки после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.querySelector('.btn-center .btn');
    if (langBtn) {
        langBtn.onclick = switchLanguage;
    }
});

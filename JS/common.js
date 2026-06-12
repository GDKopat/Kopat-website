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

// ========== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА - ПОЧИНЕНО ==========
function switchLanguage() {
    let currentPath = window.location.pathname;
    
    // Убираем возможный слеш в конце
    let cleanPath = currentPath.replace(/\/$/, '');
    
    // Отделяем имя файла
    let lastSlash = cleanPath.lastIndexOf('/');
    let fileName = lastSlash !== -1 ? cleanPath.substring(lastSlash + 1) : cleanPath;
    
    // Если пусто (открыт корень сайта) → считаем index.html
    if (fileName === '') {
        fileName = 'index.html';
        cleanPath = cleanPath + '/'; // восстанавливаем для правильной замены
    }
    
    if (fileName.startsWith('eng-')) {
        // Переход на русскую версию (убираем eng-)
        let newFileName = fileName.replace('eng-', '');
        let newPath = cleanPath.substring(0, lastSlash + 1) + newFileName;
        window.location.href = newPath;
    } else {
        // Переход на английскую версию (добавляем eng-)
        let newFileName = 'eng-' + fileName;
        let newPath = cleanPath.substring(0, lastSlash + 1) + newFileName;
        window.location.href = newPath;
    }
}

// Инициализация кнопки
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.querySelector('.btn-center .btn');
    if (langBtn) {
        langBtn.onclick = switchLanguage;
    }
});

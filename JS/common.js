// ==================== common.js ====================
// 1. ПАРАЛЛАКС ДЛЯ ГЛАВНОЙ КАРТИНКИ
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

// 2. АНИМАЦИЯ ПРИ ПРОКРУТКЕ (fade-up)
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

// 3. ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА (ТОЛЬКО ПО КНОПКЕ)
function switchLanguage() {
    let currentPath = window.location.pathname;   // /Kopat-website/  или  /Kopat-website/about.html
    
    // Если уже на английской странице – убираем eng-
    if (currentPath.includes('eng-')) {
        let newPath = currentPath.replace('eng-', '');
        window.location.href = newPath;
        return;
    }
    
    // Иначе – переключаем на английскую версию
    // Главная страница (путь заканчивается на /, index.html или вообще ничего)
    if (currentPath === '/' || currentPath === '/Kopat-website/' || currentPath.endsWith('index.html')) {
        window.location.href = '/Kopat-website/eng-index.html';
    }
    // Страница about
    else if (currentPath.includes('about.html')) {
        window.location.href = '/Kopat-website/eng-about.html';
    }
    // Любая другая страница (если вдруг) – кидаем на английскую главную
    else {
        window.location.href = '/Kopat-website/eng-index.html';
    }
}

// 4. ПОДКЛЮЧАЕМ КНОПКУ ПОСЛЕ ЗАГРУЗКИ СТРАНИЦЫ
document.addEventListener('DOMContentLoaded', function() {
    // Ищем кнопку внутри .btn-center с классом .btn
    let langButton = document.querySelector('.btn-center .btn');
    if (!langButton) {
        // Если не нашли – может, кнопка просто с классом .btn где-то ещё
        langButton = document.querySelector('.btn[onclick="switchLanguage()"]');
    }
    if (langButton) {
        // Если у кнопки уже есть onclick – убираем его, чтобы не срабатывало дважды
        langButton.removeAttribute('onclick');
        langButton.addEventListener('click', switchLanguage);
    }
});

// Переключение языка (редирект на eng-страницы)
function switchLanguage() {
    // Получаем текущий путь
    let currentPath = window.location.pathname;
    
    // Убираем начальный и конечный слеши для удобства
    let cleanPath = currentPath.replace(/^\/|\/$/g, '');
    
    // Определяем, находимся ли мы на английской версии
    // Проверяем, начинается ли путь с 'eng-' ИЛИ это папка 'eng-'
    let isEnglish = cleanPath.startsWith('eng-') || cleanPath === 'eng-';
    
    let newPath = '';
    
    if (isEnglish) {
        // Переключаем на русскую версию: убираем 'eng-' из пути
        if (cleanPath === 'eng-' || cleanPath === 'eng-index.html') {
            newPath = '/Kopat-website/';
        } else if (cleanPath === 'eng-about.html') {
            newPath = '/Kopat-website/about.html';
        } else {
            // Если путь начинается с 'eng-', убираем этот префикс
            newPath = '/Kopat-website/' + cleanPath.substring(4);
        }
    } else {
        // Переключаем на английскую версию
        if (cleanPath === '' || cleanPath === 'index.html' || cleanPath === 'Kopat-website/') {
            newPath = '/Kopat-website/eng-index.html';
        } else if (cleanPath === 'about.html') {
            newPath = '/Kopat-website/eng-about.html';
        } else {
            newPath = '/Kopat-website/eng-' + cleanPath;
        }
    }
    
    // Убираем возможные двойные слеши
    newPath = newPath.replace(/\/\//g, '/');
    console.log('Переход на:', newPath);
    window.location.href = newPath;
}

// Инициализация кнопки после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Ищем кнопку. Добавь ей класс или ID, чтобы наверняка.
    const langBtn = document.querySelector('.lang-switch-btn, .btn-center .btn, button.btn');
    if (langBtn) {
        langBtn.onclick = switchLanguage;
        console.log('Кнопка найдена, обработчик повешен');
    } else {
        console.log('Кнопка не найдена');
    }
});

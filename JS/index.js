// index.js - только для index.html

function askQuestion() {
    let answer = prompt('Какой твой любимый язык программирования?');
    if (answer) {
        if (answer.length > 20) {
            alert("Ладно -_-");
        } else if (answer === "67") {
            alert("67 67 пасхалко");
        } else {
            alert(`Отличный выбор! ${answer} — это мощно!`);
        }
    }
}

const subtitleElement = document.getElementById('typewriter-subtitle');
if (subtitleElement) {
    const subtitleText = 'Welcome to my website!';
    let subtitleIndex = 0;
    function typeSubtitle() {
        if (subtitleIndex < subtitleText.length) {
            subtitleElement.textContent += subtitleText.charAt(subtitleIndex);
            subtitleIndex++;
            setTimeout(typeSubtitle, 40);
        }
    }
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(typeSubtitle, 1000);
    });
}
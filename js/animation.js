const logo = document.getElementsByClassName('nav__logo').item(0);

function removeAnimation() {
    logo.style.animation = 'none';
}

// Слушаем событие окончания анимации
logo.addEventListener('animationend', () => {
    removeAnimation();
});

// Вручную запускаем анимацию
logo.style.animationPlayState = 'running';

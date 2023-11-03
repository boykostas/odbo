// JavaScript для переключения меню "бургер"

const burgerMenu = document.getElementById('burger-menu');
const navigation = document.getElementById('nav');

burgerMenu.addEventListener('click', () => {
    navigation.classList.toggle('show-menu');
});

// Закрытие меню при нажатии на ссылку (по желанию)
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('show-menu');
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        const menuHamburguer = document.querySelector('menu-hamburguer');
        const navLinks = document.querySelector('.div-containe-links');

        menuHamburguer.addEventListener('click', function() {
            menuHamburguer.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    });

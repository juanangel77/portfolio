// Menu de navigation mobile : Toggle (affichage ou masquage du menu sur mobile)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav ul');

// Lorsque l'utilisateur clique sur l'icône du menu
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fonction pour animer le formulaire de contact après soumission
const contactForm = document.querySelector('form');
const formButton = contactForm.querySelector('button');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêcher
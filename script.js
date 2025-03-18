// Menu de navigation mobile : Toggle (affichage ou masquage du menu sur mobile)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fonction pour animer le formulaire de contact après soumission
const contactForm = document.querySelector('form');
const formButton = contactForm.querySelector('button');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Désactiver le bouton pour éviter les soumissions multiples
    formButton.disabled = true;
    formButton.textContent = "Envoi en cours...";

    // Simuler un envoi avec un délai
    setTimeout(() => {
        formButton.textContent = "Message envoyé !";
        formButton.style.backgroundColor = "green";

        // Réinitialisation du formulaire après quelques secondes
        setTimeout(() => {
            contactForm.reset();
            formButton.textContent = "Envoyer";
            formButton.style.backgroundColor = "";
            formButton.disabled = false;
        }, 3000);
    }, 2000);
});
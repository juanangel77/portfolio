// 🌟 Smooth Scroll : Défilement fluide quand on clique sur un lien du menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 🎠 Carrousel d’images pour les projets
const images = [
    "assets/images/nessus_scan.jpg",
    "assets/images/ctf.jpg",
    "assets/images/python_pentest.jpg"
];

let currentIndex = 0;
const carouselImage = document.createElement("img");
carouselImage.src = images[currentIndex];
carouselImage.classList.add("carousel-img");
document.getElementById("projects").prepend(carouselImage);

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
}, 3000);

// ✨ Effet d’apparition au scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});

// 🖱️ Effet hover sur les projets
document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("mouseover", () => {
        project.style.transform = "scale(1.05)";
        project.style.transition = "0.3s";
    });

    project.addEventListener("mouseout", () => {
        project.style.transform = "scale(1)";
    });
});
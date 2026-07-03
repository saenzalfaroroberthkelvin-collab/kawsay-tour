/* =========================
MENÚ MÓVIL
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* =========================
BUSCADOR DE DESTINOS
========================= */

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

/* =========================
SCROLL SUAVE EN LINKS
========================= */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

/* =========================
CARRUSEL AUTOMÁTICO
========================= */

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    index++;

    if (index > slides.length) {
        index = 1;
    }

    slides[index - 1].style.display = "block";
}

if (slides.length > 0) {
    showSlide();
    setInterval(showSlide, 3000);
}

/* =========================
CONTADOR ANIMADO
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();

});

/* =========================
BOTÓN VOLVER ARRIBA
========================= */

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================
ANIMACIÓN AL HACER SCROLL
========================= */

const animatedElements = document.querySelectorAll(
    ".card, .service, .promo, .testimonial, .stat"
);

function showOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(el => {

        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "0.6s ease";
        } else {
            el.style.opacity = "0";
            el.style.transform = "translateY(40px)";
        }

    });

}

window.addEventListener("scroll", showOnScroll);

showOnScroll();

/* =========================
INICIALIZACIÓN GENERAL
========================= */

window.addEventListener("load", () => {

    console.log("Kawsay Tours cargado correctamente 🚀");

});

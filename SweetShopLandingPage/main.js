// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Sticky nav elevated shadow on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 16) {
        navbar.classList.add('elevated');
    } else {
        navbar.classList.remove('elevated');
    }
});

// Animate sweet-card on scroll
const animateCards = () => {
    const cards = document.querySelectorAll('.sweet-card');
    const trigger = window.innerHeight * 0.88;
    cards.forEach(card => {
        const cardPos = card.getBoundingClientRect().top;
        if (cardPos < trigger) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
};
window.addEventListener('scroll', animateCards);
window.addEventListener('DOMContentLoaded', animateCards);

// Contact form logic
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        setTimeout(() => {
            contactForm.reset();
            formSuccess.style.display = 'none';
            contactForm.style.display = '';
        }, 2800);
    });
}

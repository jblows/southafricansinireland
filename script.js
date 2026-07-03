// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Directory filter
const filterButtons = document.querySelectorAll('.filter-btn');
const directoryCards = document.querySelectorAll('.directory-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        directoryCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .event-card, .resource-card, .directory-card, .forum-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// RSVP Modal
const rsvpModal = document.getElementById('rsvp-modal');
const modalClose = document.getElementById('modal-close');
const modalEventName = document.getElementById('modal-event-name');
const rsvpForm = document.getElementById('rsvp-form');

document.querySelectorAll('.rsvp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const eventCard = btn.closest('.event-card');
        const eventName = eventCard.querySelector('h3').textContent;
        modalEventName.textContent = eventName;
        document.getElementById('rsvp-event-name').value = eventName;
        rsvpModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', () => {
    rsvpModal.classList.remove('active');
    document.body.style.overflow = '';
});

rsvpModal.addEventListener('click', (e) => {
    if (e.target === rsvpModal) {
        rsvpModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('rsvp-name').value;
    const event = modalEventName.textContent;
    rsvpModal.classList.remove('active');
    document.body.style.overflow = '';
    alert(`Thanks ${name}! You're confirmed for ${event}. We'll send details to your email.`);
    rsvpForm.reset();
});

// Business Listing Modal
const listingModal = document.getElementById('listing-modal');
const listBusinessBtn = document.getElementById('list-business-btn');
const listingForm = document.getElementById('listing-form');

listBusinessBtn.addEventListener('click', (e) => {
    e.preventDefault();
    listingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.querySelector('.listing-modal-close').addEventListener('click', () => {
    listingModal.classList.remove('active');
    document.body.style.overflow = '';
});

listingModal.addEventListener('click', (e) => {
    if (e.target === listingModal) {
        listingModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

listingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    listingModal.classList.remove('active');
    document.body.style.overflow = '';
    alert('Thanks! Your listing has been submitted for review. We\'ll add it within 48 hours.');
    listingForm.reset();
});

// Newsletter form — submitted via Formspree
// No preventDefault needed; Formspree handles the POST

// Contact form — submitted via Formspree
// No preventDefault needed; Formspree handles the POST

// Forum card clicks
document.querySelectorAll('#forum .forum-card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = 'forum/index.html';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// Back to Top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

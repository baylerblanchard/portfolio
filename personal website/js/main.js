const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Add hamburger animation
    const hamburger = navToggle.querySelector('.hamburger');
    if (hamburger) {
        hamburger.classList.toggle('is-active');
    }
});

// Add active class to current page link
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// --- Theme Switcher ---
const themeToggle = document.querySelector('#checkbox');

const applyTheme = (theme) => {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.checked = true;
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.checked = false;
    }
};

// Check for saved theme in localStorage and apply it
const currentTheme = localStorage.getItem('theme') || 'dark';
applyTheme(currentTheme);

themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});
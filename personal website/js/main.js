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

    // Get the button element
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    // Get the html element to toggle the 'dark' class
    const htmlElement = document.documentElement;

    // Check for saved theme preference in localStorage, or use system preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    // Add click event listener to the button
    themeToggleBtn.addEventListener('click', () => {
        // Toggle the 'dark' class
        htmlElement.classList.toggle('dark');
        
        // Save the user's preference to localStorage
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
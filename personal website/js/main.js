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
    // Get the current path, defaulting to index.html if root
    const path = window.location.pathname;
    const currentPage = path.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

    // Get the button element
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    // Get the html element to toggle the 'dark' class
    const htmlElement = document.documentElement; 
    const checkbox = document.getElementById('checkbox');

    // Check for saved theme preference in localStorage, or use system preference
    const isDarkMode = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkMode) {
        htmlElement.classList.add('dark');
        if(checkbox) checkbox.checked = false;
    } else {
        htmlElement.classList.remove('dark');
        if(checkbox) checkbox.checked = true;
    }

    // Add click event listener to the button
    themeToggleBtn.addEventListener('click', () => {
        // Toggle the 'dark' class
        const isDark = htmlElement.classList.toggle('dark');
        
        // Save the user's preference to localStorage
        if (isDark) {
            localStorage.setItem('theme', 'dark');
            if(checkbox) checkbox.checked = false;
        } else {
            localStorage.setItem('theme', 'light');
            if(checkbox) checkbox.checked = true;
        }
    });

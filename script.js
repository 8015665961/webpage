// Get the current page URL
const currentUrl = window.location.href;

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through the links and add the 'active' class to the matching link
navLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('active');
    }
});

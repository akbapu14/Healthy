// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial check for elements in viewport
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Add animation class to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 300);
    }
    
    // Add animation class to hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.classList.add('fade-in');
        setTimeout(() => {
            heroImage.classList.add('visible');
        }, 500);
    }
});

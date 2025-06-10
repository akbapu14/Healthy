/**
 * Healthy AI Copilot - Landing Page JavaScript
 */

// Header scroll effect
const header = document.querySelector('.header');
const handleHeaderScroll = () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Animate background shapes
const animateShapes = () => {
    const shapes = document.querySelectorAll('.shape-1, .shape-2, .shape-3');
    shapes.forEach(shape => {
        const speed = 0.02 + Math.random() * 0.01;
        const xPos = (0.5 - Math.random()) * 10;
        const yPos = (0.5 - Math.random()) * 10;
        shape.style.transition = `transform ${5 + Math.random() * 10}s cubic-bezier(0.4, 0, 0.2, 1)`;
        shape.style.transform = `translate(${xPos}px, ${yPos}px) scale(${1 + Math.random() * 0.1})`;
        
        setTimeout(() => {
            animateShapes();
        }, 5000 + Math.random() * 5000);
    });
};

// Staggered animation for elements
const animateElements = () => {
    // Hero content animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Trust badges animations with staggered delay
    const trustBadges = document.querySelectorAll('.trust-badge');
    trustBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(15px)';
        setTimeout(() => {
            badge.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
        }, 800 + (index * 150)); // Staggered delay
    });
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Video modal functionality removed

// EKG animation interaction
document.addEventListener('DOMContentLoaded', function() {
    const ekgContainer = document.querySelector('.ekg-container');
    
    if (ekgContainer) {
        ekgContainer.addEventListener('click', function() {
            // Add active class for pulse effect
            this.classList.add('active');
            
            // Speed up animation temporarily
            const ekgLine = this.querySelector('.ekg-line');
            if (ekgLine) {
                ekgLine.style.animationDuration = '6s';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    ekgLine.style.animationDuration = '12s';
                    this.classList.remove('active');
                }, 2000);
            }
        });
    }
});

// Initialize everything on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll handlers
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Initial check
    
    // Initialize animations
    animateElements();
    setTimeout(animateShapes, 1000);
    
    // Add hover effects to buttons
    document.querySelectorAll('.primary-button, .nav-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            const icon = button.querySelector('i');
            if (icon) icon.style.transform = 'translateX(4px)';
        });
        
        button.addEventListener('mouseleave', () => {
            const icon = button.querySelector('i');
            if (icon) icon.style.transform = 'translateX(0)';
        });
    });
});

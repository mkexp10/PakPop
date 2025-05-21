document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\:hidden');
    const navMenu = document.querySelector('nav');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('block');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!navMenu.classList.contains('hidden')) {
                    navMenu.classList.add('hidden');
                    navMenu.classList.remove('block');
                }
            }
        });
    });

    // Add animation to recipe cards on scroll
    const animateOnScroll = () => {
        const recipeCards = document.querySelectorAll('.recipe-card');
        
        recipeCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * index);
            }
        });
    };

    // Set initial styles for animation
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run animation on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Add pop animation to popcorn icon on hover
    const popcornIcon = document.querySelector('.fa-popcorn');
    if (popcornIcon) {
        popcornIcon.addEventListener('mouseover', function() {
            this.classList.add('pop-animation');
            
            // Remove the animation class after it completes
            setTimeout(() => {
                this.classList.remove('pop-animation');
            }, 300);
        });
    }

    // Form submission for newsletter
    const newsletterForm = document.querySelector('form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('button, a[href="#"]');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                // Add your click handler here
                console.log('Button clicked:', this.textContent.trim());
            }
        });
    });

    // Add year to footer copyright
    const yearElement = document.querySelector('footer p:last-child');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} Popcorn Central. All rights reserved.`;
    }
});

// Add class to body when page is loaded
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

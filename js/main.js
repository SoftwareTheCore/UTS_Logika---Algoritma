// Animasi smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple fade in animation that works on mobile and desktop
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS for fade animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-element {
            opacity: 0;
            animation: simpleFadeIn 0.6s ease forwards;
        }
        
        @keyframes simpleFadeIn {
            from {
                opacity: 0;
                transform: translateY(15px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Stagger animation delays */
        .fade-in-element:nth-child(1) { animation-delay: 0.1s; }
        .fade-in-element:nth-child(2) { animation-delay: 0.2s; }
        .fade-in-element:nth-child(3) { animation-delay: 0.3s; }
        .fade-in-element:nth-child(4) { animation-delay: 0.4s; }
        .fade-in-element:nth-child(5) { animation-delay: 0.5s; }
        .fade-in-element:nth-child(6) { animation-delay: 0.6s; }
    `;
    document.head.appendChild(style);
    
    // Apply fade-in class to elements
    const elements = document.querySelectorAll('.card, .content-section');
    elements.forEach((element, index) => {
        element.classList.add('fade-in-element');
        // For elements beyond 6, add custom delay
        if (index > 5) {
            element.style.animationDelay = `${(index + 1) * 0.1}s`;
        }
    });
});

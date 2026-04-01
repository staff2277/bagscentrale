document.addEventListener('DOMContentLoaded', () => {
    // GSAP Registration (if needed)
    // gsap.registerPlugin(ScrollTrigger); // Assuming user has ScrollTrigger from CDN if they requested complex scroll, I'll stick to basic for now.

    // Logo reveal animation
    gsap.from(".logo", {
        duration: 1.5,
        opacity: 0,
        y: -30,
        ease: "power4.out"
    });

    // Nav-links reveal
    gsap.from(".nav-links li", {
        duration: 1,
        opacity: 0,
        y: -20,
        stagger: 0.1,
        delay: 0.5,
        ease: "power3.out"
    });

    // Stagger-reveal hero content
    gsap.from(".stagger-reveal", {
        duration: 1.5,
        opacity: 0,
        y: 40,
        stagger: 0.2,
        delay: 1,
        ease: "power4.out"
    });

    // Hero background subtle scale
    gsap.from("#hero", {
        duration: 3,
        scale: 1.1,
        opacity: 0,
        ease: "power2.out"
    });

    // Header scroll background change
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Product cards hover effects (just a demo trigger)
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.product-img'), {
                duration: 0.6,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                ease: "power2.out"
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.product-img'), {
                duration: 0.6,
                scale: 1,
                boxShadow: "0 0px 0px rgba(0,0,0,0)",
                ease: "power2.out"
            });
        });
    });
});

// ===========================
// ENHANCED JAVASCRIPT FOR CYBER-SYNTH EXPERIENCE
// ===========================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Header scroll effects
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// ===========================
// 3D INTERACTIVE CUBE
// ===========================
const cubeContainer = document.querySelector('.interactive-cube-container');
const cube = document.querySelector('.interactive-cube');

if (cubeContainer && cube) {
    const heroSection = document.querySelector('.hero');
    let isHoveringHero = false;

    // Pulse the cube every 5 seconds
    setInterval(() => {
        cube.classList.add('pulse');
        setTimeout(() => {
            cube.classList.remove('pulse');
        }, 2000);
    }, 5000);

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const cubeSize = 60;

        // Position the cube in the DOM
        cube.style.left = `${x - cubeSize / 2}px`;
        cube.style.top = `${y - cubeSize / 2}px`;

        // Calculate rotation based on mouse position relative to viewport center
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const rotateY = (x - centerX) / centerX * 45; // Rotate from -45deg to 45deg
        const rotateX = -(y - centerY) / centerY * 45; // Rotate from -45deg to 45deg

        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Animate cube glow and size on hero section hover
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            isHoveringHero = true;
            cube.style.transform = `scale(1.2)`;
            cube.style.boxShadow = '0 0 30px var(--neon-glow)';
        });
        heroSection.addEventListener('mouseleave', () => {
            isHoveringHero = false;
            cube.style.transform = `scale(1)`;
            cube.style.boxShadow = 'none';
        });
    }
}
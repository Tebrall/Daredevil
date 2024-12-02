


let lastScrollPosition = 0;
const navbar = document.querySelector('.medieval-navbar');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        // User is scrolling down
        navbar.style.top = '-100px'; // Hide navbar by moving it out of view
    } else {
        // User is scrolling up
        navbar.style.top = '0'; // Show navbar by setting it back to the top
    }

    lastScrollPosition = currentScrollPosition;
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-links a'); // Select all anchor tags inside .nav-links


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle visibility of menu
    hamburger.classList.toggle('active'); // Toggle hamburger animation
});


// Tokenomics counter animation
const tokenCards = document.querySelectorAll('.token-card1');
tokenCards.forEach(card => {
    const countElement = card.querySelector('p');
    const targetCount = parseInt(countElement.innerText.replace(/,/g, ''), 10);
    let currentCount = 0;
    const duration = 2000; // 2 seconds
    const stepTime = 50; // Update every 50ms
    const steps = duration / stepTime;
    const increment = targetCount / steps;

    function updateCount() {
        currentCount += increment;
        if (currentCount < targetCount) {
            countElement.innerText = Math.round(currentCount).toLocaleString();
            setTimeout(updateCount, stepTime);
        } else {
            countElement.innerText = targetCount.toLocaleString();
        }
    }

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCount();
            observer.unobserve(card);
        }
    }, { threshold: 0.5 });

    observer.observe(card);
});

// Meme gallery rotation
const memeItems = document.querySelectorAll('.meme-item');
memeItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = item.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        const rotateX = (y - 0.5) * 20;
        const rotateY = (x - 0.5) * 20;
        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Reveal timeline items
const revealTimelineItems = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            item.classList.add('active');
        }
    });
};
// Smooth scroll for navigation links


navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start'     // Scroll to the top of the section
            });
        }
    });
});

window.addEventListener('scroll', revealTimelineItems);
window.addEventListener('load', revealTimelineItems);


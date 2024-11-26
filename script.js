document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    if (mobileMenuToggle && mobileMenu && mobileMenuClose) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll reveal animations
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');

        reveals.forEach((reveal) => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Call on initial load

    // Animated background
    const animatedBg = document.querySelector('.animated-bg');
    if (animatedBg) {
        for (let i = 0; i < 50; i++) {
            const span = document.createElement('span');
            animatedBg.appendChild(span);
        }
    }

    // Parallax effect
    window.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach((element) => {
            const distance = window.scrollY;
            element.style.transform = `translateY(${distance * 0.5}px)`;
        });
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

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
});

function revealTimelineItems() {
    var timelineItems = document.querySelectorAll('.timeline-item');
    for (var i = 0; i < timelineItems.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = timelineItems[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            timelineItems[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealTimelineItems);
window.addEventListener("load", revealTimelineItems);
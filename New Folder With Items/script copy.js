$(document).ready(function() {
    // Initialize AOS library for animations
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Animate comic elements on scroll
    $(window).scroll(function() {
        $('.comic-element').each(function() {
            var elementPosition = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();

            if (viewportBottom > elementPosition) {
                $(this).addClass('animate__animated animate__shakeX');
            }
        });
    });

    // Hide header on scroll down
    var prevScrollpos = window.pageYOffset;
    $(window).on('scroll', function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $('#header').removeClass('hidden-header');
        } else {
            $('#header').addClass('hidden-header');
        }
        prevScrollpos = currentScrollPos;
    });

    // Smooth scrolling for navigation links
    $('header nav ul li a, footer .footer-nav ul li a').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 800);
    });
});

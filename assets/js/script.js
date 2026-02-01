// Test if script loads
console.log('Script loaded!');

// ===========================
// Mobile Menu Toggle
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready');

    var mobileMenuToggle = document.getElementById('mobileMenuToggle');
    var navMenu = document.getElementById('navMenu');

    console.log('Toggle button:', mobileMenuToggle);
    console.log('Nav menu:', navMenu);

    if (mobileMenuToggle && navMenu) {
        console.log('Mobile menu elements found!');

        mobileMenuToggle.onclick = function(e) {
            console.log('Button clicked!');
            e.preventDefault();

            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');

            console.log('Menu active:', navMenu.classList.contains('active'));
        };
    } else {
        console.log('Mobile menu elements NOT found!');
    }
});

// ===========================
// Navbar Scroll Effect
// ===========================
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.pageYOffset > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ===========================
// Contact Form Handling
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var message = document.getElementById('message');

            if (!name.value || !email.value || !message.value) {
                alert('Gelieve alle verplichte velden in te vullen.');
                return;
            }

            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Gelieve een geldig e-mailadres in te voeren.');
                return;
            }

            alert('Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.');
            contactForm.reset();
        });
    }
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    var anchors = document.querySelectorAll('a[href^="#"]');

    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href !== '#') {
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
});

// ===========================
// Animation on Scroll
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    var observer = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                entries[i].target.classList.add('visible');
                entries[i].target.style.opacity = '1';
                entries[i].target.style.transform = 'translateY(0)';
            }
        }
    }, observerOptions);

    var animateElements = document.querySelectorAll('.service-card, .service-card-image, .content-box, .why-list li, .section-header, .intro-text, .intro-image, .why-content, .why-image, .cta-content, .treatment-card-image, .approach-card, .target-group-row');

    for (var i = 0; i < animateElements.length; i++) {
        var el = animateElements[i];
        var delay = (i % 4) * 0.1;
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease ' + delay + 's, transform 0.6s ease ' + delay + 's';
        observer.observe(el);
    }
});

// ===========================
// Active Page Navigation Highlighting
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    var currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    var navLinks = document.querySelectorAll('.nav-menu a:not(.btn-nav)');

    for (var i = 0; i < navLinks.length; i++) {
        var linkPage = navLinks[i].getAttribute('href');
        if (linkPage === currentPage) {
            navLinks[i].classList.add('active');
        }
    }
});

// ===========================
// Mobile Menu Toggle
// ===========================
(function() {
    'use strict';

    function initMobileMenu() {
        var mobileMenuToggle = document.getElementById('mobileMenuToggle');
        var navMenu = document.getElementById('navMenu');
        var isMenuOpen = false;

        if (!mobileMenuToggle || !navMenu) {
            console.log('Mobile menu elements not found');
            return;
        }

        console.log('Mobile menu initialized');

        // Toggle menu on button click
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            isMenuOpen = !isMenuOpen;

            if (isMenuOpen) {
                mobileMenuToggle.classList.add('active');
                navMenu.classList.add('active');
                document.body.classList.add('menu-open');
            } else {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }

            console.log('Menu toggled, isOpen:', isMenuOpen);
        });

        // Close menu when clicking on a nav link
        var navLinks = navMenu.querySelectorAll('a');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function() {
                isMenuOpen = false;
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        }

        // Close menu when clicking outside (with delay to prevent immediate close)
        document.addEventListener('click', function(e) {
            if (isMenuOpen && !navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                isMenuOpen = false;
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isMenuOpen) {
                isMenuOpen = false;
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();

// ===========================
// Navbar Scroll Effect
// ===========================
(function() {
    'use strict';

    var navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
})();

// ===========================
// Contact Form Handling
// ===========================
(function() {
    'use strict';

    function initContactForm() {
        var contactForm = document.getElementById('contactForm');

        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();

                var name = document.getElementById('name');
                var email = document.getElementById('email');
                var message = document.getElementById('message');

                // Basic validation
                if (!name.value || !email.value || !message.value) {
                    alert('Gelieve alle verplichte velden in te vullen.');
                    return;
                }

                // Email validation
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                    alert('Gelieve een geldig e-mailadres in te voeren.');
                    return;
                }

                alert('Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.');
                contactForm.reset();
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactForm);
    } else {
        initContactForm();
    }
})();

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
(function() {
    'use strict';

    function initSmoothScroll() {
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
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSmoothScroll);
    } else {
        initSmoothScroll();
    }
})();

// ===========================
// Animation on Scroll
// ===========================
(function() {
    'use strict';

    function initScrollAnimations() {
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
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollAnimations);
    } else {
        initScrollAnimations();
    }
})();

// ===========================
// Active Page Navigation Highlighting
// ===========================
(function() {
    'use strict';

    function initActiveNav() {
        var path = window.location.pathname;
        var currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        var navLinks = document.querySelectorAll('.nav-menu a:not(.btn-nav)');

        for (var i = 0; i < navLinks.length; i++) {
            var linkPage = navLinks[i].getAttribute('href');
            if (linkPage === currentPage) {
                navLinks[i].classList.add('active');
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initActiveNav);
    } else {
        initActiveNav();
    }
})();

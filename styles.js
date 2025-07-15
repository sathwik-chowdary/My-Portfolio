// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#6a11cb"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#2575fc",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: false
    });

    // Typed.js Initialization
    var typed = new Typed('.auto-type', {
        strings: ['Clean', 'Analyse', 'Transform', 'Visualize', 'Predict', 'Develop', 'Design', 'Create'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        startDelay: 300,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    });

    // Assign typed instance to a window variable for potential reference
    window.typedInstance = typed;

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(function() {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });

        // Add hover effect to interactive elements
        const hoverElements = document.querySelectorAll('a, button, .skill-item, .project-card');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                cursor.classList.add('cursor-hover');
                cursorFollower.classList.add('cursor-hover');
            });
            
            element.addEventListener('mouseleave', function() {
                cursor.classList.remove('cursor-hover');
                cursorFollower.classList.remove('cursor-hover');
            });
        });
    }

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    
    if (menuBtn && navbar) {
        let menuOpen = false;
        
        menuBtn.addEventListener('click', function() {
            if (!menuOpen) {
                menuBtn.classList.add('open');
                navbar.classList.add('show');
                menuOpen = true;
            } else {
                menuBtn.classList.remove('open');
                navbar.classList.remove('show');
                menuOpen = false;
            }
        });

        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuBtn.classList.remove('open');
                navbar.classList.remove('show');
                menuOpen = false;
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal functionality
    const modalBtns = document.querySelectorAll('.open-modal');
    const closeBtns = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    if (modalBtns.length > 0 && modals.length > 0) {
        modalBtns.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                modals[index].style.display = 'block';
                document.body.classList.add('modal-open');
            });
        });

        closeBtns.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                modals[index].style.display = 'none';
                document.body.classList.remove('modal-open');
            });
        });

        window.addEventListener('click', function(e) {
            modals.forEach(modal => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.classList.remove('modal-open');
                }
            });
        });
    }

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        });
    }

    // Animate skill progress bars when they come into view
    const skillItems = document.querySelectorAll('.skill-item');
    
    if (skillItems.length > 0) {
        const animateSkills = function() {
            skillItems.forEach(item => {
                const progressBar = item.querySelector('.progress');
                const bounding = item.getBoundingClientRect();
                
                if (bounding.top < window.innerHeight - 100) {
                    progressBar.style.width = progressBar.getAttribute('style').split('width:')[1];
                }
            });
        };
        
        // Initial check
        animateSkills();
        
        // Check on scroll
        window.addEventListener('scroll', animateSkills);
    }

    // Header scroll effect
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Project image hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            const img = card.querySelector('img');
            
            if (img) {
                card.addEventListener('mouseenter', function() {
                    img.style.transform = 'scale(1.1)';
                });
                
                card.addEventListener('mouseleave', function() {
                    img.style.transform = 'scale(1)';
                });
            }
        });
    }
});
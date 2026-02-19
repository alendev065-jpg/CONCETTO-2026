document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Reveal Animation ---

    // Options for the observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Callback function for the observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                // If it's a grid container (like events), we might want to stagger children
                if (target.dataset.staggerContainer) {
                    const children = target.querySelectorAll('.stagger-item');
                    children.forEach((child, index) => {
                        // Delay calculation: index * 100ms
                        setTimeout(() => {
                            child.classList.add('is-visible');
                        }, index * 100);
                    });
                    // Also reveal the container itself if it has the class, though usually invisible
                    target.classList.add('is-visible');
                } else {
                    // Regular section or element
                    // Apply delay if specified in data attribute
                    const delay = target.dataset.delay || 0;
                    setTimeout(() => {
                        target.classList.add('is-visible');
                    }, delay);
                }

                // Stop observing once revealed (trigger once)
                observer.unobserve(target);
            }
        });
    };

    // Create the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Select elements to reveal
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));
    // --- Number Counter Animation ---
    const counters = document.querySelectorAll('.counter');
    const counterOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 3500; // 3.5 seconds
                const steps = 8; // Number of distinct steps
                const startTime = performance.now();
                let lastStep = -1;

                const updateCounter = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);

                    // Determine which step we are in
                    const currentStep = Math.floor(progress * steps);

                    // Only update DOM if we've moved to a new step or finished
                    if (currentStep > lastStep || progress === 1) {
                        lastStep = currentStep;

                        // Calculate value based on step progress with easing
                        const stepProgress = Math.min(currentStep / steps, 1);

                        // Ease out quart
                        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
                        const easedProgress = easeOutQuart(stepProgress);

                        const currentVal = progress === 1 ? target : (target * easedProgress);

                        const isFloat = target % 1 !== 0; // Check if target has decimals (like 1.25)

                        if (isFloat) {
                            counter.innerText = currentVal.toFixed(2);
                        } else {
                            counter.innerText = Math.floor(currentVal);
                        }
                    }

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target; // Ensure exact final value
                    }
                };

                requestAnimationFrame(updateCounter);
                observer.unobserve(counter);
            }
        });
    }, counterOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // --- Event Schedule Accordion Logic ---
    const scheduleDetails = document.querySelectorAll('#schedule details');

    // Helper to manage state based on screen size
    const handleScheduleResize = () => {
        const isDesktop = window.innerWidth >= 768;
        scheduleDetails.forEach((detail) => {
            const summary = detail.querySelector('summary');
            if (isDesktop) {
                // Desktop: Always open, disable Interaction
                if (!detail.hasAttribute('open')) {
                    detail.setAttribute('open', '');
                }
                summary.style.pointerEvents = 'none';
                summary.style.cursor = 'default';
            } else {
                // Mobile: Interactive
                summary.style.pointerEvents = 'auto';
                summary.style.cursor = 'pointer';
            }
        });
    };

    // Initial Setup: On mobile, collapse Day 2 and Day 3 by default
    if (window.innerWidth < 768) {
        scheduleDetails.forEach((detail, index) => {
            // Index 0 is Day 1. Close others.
            if (index > 0) {
                detail.removeAttribute('open');
            }
        });
    }

    // Run on resize
    window.addEventListener('resize', handleScheduleResize);

    // Run immediately to set desktop/mobile state
    handleScheduleResize();

    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        });
    }
});

// for scrolling
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    function handleScroll() {
        if (window.scrollY > 50) { // Adjust this value as needed
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Call handleScroll on page load to set the initial state
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function() {
    const itemsToAnimate = document.querySelectorAll('.portfolio-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('portfolio-animate');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, observerOptions);

    itemsToAnimate.forEach(item => {
        observer.observe(item);
    });
});

 // JavaScript to close the navbar on link click
 document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const bsCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {
            toggle: false
        });
        bsCollapse.hide(); // Hide the dropdown menu
    });
});
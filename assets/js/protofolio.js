document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    // Function to handle the scroll event
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

    // JavaScript to handle dropdown menu behavior
    const portfolioDropdown = document.querySelector('#portfolioDropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNav');

    // Prevent navbar from hiding when clicking "Portfolio"
    portfolioDropdown.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click from closing the navbar
    });

    // Hide navbar when clicking on any dropdown item
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide(); // Hide the dropdown menu
        });
    });
});

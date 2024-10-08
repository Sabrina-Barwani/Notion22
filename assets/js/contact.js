function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Collect user input from the form
        var name = document.querySelector('#name').value;
        var email = document.querySelector('#email').value;
        var message = document.querySelector('#message').value;
        var phone = document.querySelector('#phone').value;

         // Validate email
         if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return; // Stop further execution if the email is invalid
        }

        // Send email
        emailjs.send("service_9t6kf96", "template_60nrdhu", {
            from_name: name,
            from_email: email,
            phone:phone,
            message: message
        }).then(function(response) {
            // Clear the form fields
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#message').value = '';
            document.querySelector('#phone').value = '';
            alert('Email sent successfully!');

            // Optionally send an auto-reply to the user
            emailjs.send("service_9t6kf96", "template_q0beqkm", {
                to_email: email, // Send auto-reply to user's email
                user_name: name, // You can use this in the auto-reply template
            });

        }, function(error) {
            alert('Failed to send email.');
            console.error('Error:', error);
        });
    });
});
ocument.addEventListener('DOMContentLoaded', function() {
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

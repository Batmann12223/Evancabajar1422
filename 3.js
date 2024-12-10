document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal functionality for inquiries (ensure modal elements exist in HTML)
    const inquireLinks = document.querySelectorAll('a[href="#inquire"]');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close-modal');

    if (modal && closeModal) {
        inquireLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Form handling
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Implement the form submission logic here (e.g., AJAX request)
            alert('Inquiry submitted!');
            inquiryForm.reset();
        });
    }

    // Toggle event item description
    const eventItems = document.querySelectorAll('.event-item');
    eventItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });

    // Form submission and confirmation message (already provided earlier)
    const form = document.getElementById('bookingForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmationDetails = document.getElementById('confirmationDetails');
    
    // Form submission handling
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent the actual form submission

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Update the confirmation message with the booking details
        confirmationDetails.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Date:</strong> ${date}<br>
            <strong>Time:</strong> ${time}
        `;

        // Show the confirmation message
        confirmationMessage.style.display = 'block';
    });
    
});

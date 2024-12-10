document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    const bookButtons = document.querySelectorAll('.book-now');
    const paymentForm = document.getElementById('payment-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Ensure that elements exist before adding event listeners
    if (paymentForm && confirmationMessage) {
        // Event listener for "Book Now" button
        bookButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Show the payment form
                paymentForm.classList.remove('hidden');
            });
        });

        // Event listener for payment form submission
        paymentForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission

            // Mock payment success (you can add real payment gateway integration here)
            setTimeout(() => {
                // Hide payment form and show confirmation message
                paymentForm.classList.add('hidden');
                confirmationMessage.classList.remove('hidden');
            }, 1000); // Simulate payment processing delay
        });
    }
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
const destinationDropdown = document.getElementById('destination-dropdown');
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');
const guestCount = document.getElementById('guest-count');
const itineraryDetails = document.getElementById('itinerary-details');
const totalPriceElement = document.getElementById('total-price');
const packageCustomization = document.getElementById('package-customization');
let selectedPackage = null;
let totalGuests = 1;

// Handle destination selection
destinationDropdown.addEventListener('change', () => {
    const selectedDestinations = Array.from(destinationDropdown.selectedOptions).map(opt => opt.value);
    if (selectedDestinations.includes("Coron")) {
        packageCustomization.classList.remove("hidden");
    } else {
        packageCustomization.classList.add("hidden");
    }
});

// Handle package selection
document.querySelectorAll('.select-package').forEach(button => {
    button.addEventListener('click', () => {
        selectedPackage = button.dataset.package;
        updateItinerary();
    });
});

// Handle guest count change
guestCount.addEventListener('change', () => {
    totalGuests = parseInt(guestCount.value) || 1;
    updateItinerary();
});

// Update itinerary details
function updateItinerary() {
    if (!selectedPackage) {
        itineraryDetails.innerHTML = '<p>No package selected.</p>';
        totalPriceElement.textContent = '$0 USD';
        return;
    }

    const packagePrices = {
        1: 1500,
        2: 1800,
        3: 2400,
    };
    const destinations = Array.from(destinationDropdown.selectedOptions).map(opt => opt.value);
    const pricePerPerson = packagePrices[selectedPackage];
    const totalPrice = pricePerPerson * totalGuests;

    itineraryDetails.innerHTML = `
        <p><strong>Selected Package:</strong> Package ${selectedPackage}</p>
        <p><strong>Destinations:</strong> ${destinations.join(', ') || 'None selected'}</p>
        <p><strong>Travel Dates:</strong> ${startDate.value || 'Not set'} to ${endDate.value || 'Not set'}</p>
        <p><strong>Number of Guests:</strong> ${totalGuests}</p>
    `;

    totalPriceElement.textContent = `$${totalPrice.toLocaleString()} USD`;
}// Get the elements
const bookButtons = document.querySelectorAll('.book-now');
const bookingForm = document.getElementById('booking-form');
const confirmationMessage = document.getElementById('confirmation-message');

// Event listener for "Book Now" button
bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Show the booking form
        bookingForm.classList.remove('hidden');
    });
});

// Event listener for payment form submission
const paymentForm = document.getElementById('payment-form');
paymentForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Mock payment success (you can add real payment gateway integration here)
    setTimeout(() => {
        // Show confirmation message
        bookingForm.classList.add('hidden');
        confirmationMessage.classList.remove('hidden');
    }, 1000); // Simulate payment processing delay
});

});

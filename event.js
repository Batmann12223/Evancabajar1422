// Select all event items
const eventItems = document.querySelectorAll('.event-item');

// Add click event listener to each event item
eventItems.forEach(item => {
    item.addEventListener('click', function () {
        // Toggle the 'open' class when the item is clicked
        this.classList.toggle('open');
    });
});

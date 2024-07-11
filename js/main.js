document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners for form submissions
    document.getElementById('signupForm')?.addEventListener('submit', handleSignUp);
    document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
    document.getElementById('forgotPasswordForm')?.addEventListener('submit', handleForgotPassword);
    document.getElementById('addListingForm')?.addEventListener('submit', handleAddListing);
    document.getElementById('requestItemForm')?.addEventListener('submit', handleRequestItem);

    // Load listings for carousel on listings.html
    if (document.getElementById('carousel')) {
        loadListings();
    }
});

function handleSignUp(event) {
    event.preventDefault();
    // Add your sign-up logic here
}

function handleLogin(event) {
    event.preventDefault();
    // Add your login logic here
}

function handleForgotPassword(event) {
    event.preventDefault();
    // Add your forgot password logic here
}

function handleAddListing(event) {
    event.preventDefault();
    // Add your add listing logic here
}

function handleRequestItem(event) {
    event.preventDefault();
    // Add your request item logic here
}

function loadListings() {
    // Fetch and display listings for carousel
    // Example: add dummy images
    const carousel = document.getElementById('carousel');
    for (let i = 1; i <= 5; i++) {
        const img = document.createElement('img');
        img.src = `images/food${i}.jpg`; // Add your image paths here
        img.alt = `Food ${i}`;
        carousel.appendChild(img);

    }
}
// Function to fetch image paths from the 'images/' directory
function fetchImages() {
    return new Promise((resolve, reject) => {
        // Assume 'images/' directory contains your image files
        const imageDirectory = 'images/';
        
        // List of image file names (you can fetch dynamically from a server or API)
        const imageNames = ['FSAvailabe 1.jpeg', 'istockphoto-625860202-612x612.jpg', 'istockphoto-1587257999-612x612.jpg', 'FSAvailabe 2.jpeg', 'FSAvailabe 3.jpeg', 'FSAvailabe 4.jpeg'];

        // Create an array to store image elements
        const imageElements = [];

        // Iterate over image names and create <img> elements
        imageNames.forEach(imageName => {
            const img = new Image();
            img.src = imageDirectory + imageName;
            img.alt = 'Food Image'; // Alt text for accessibility
            img.classList.add('carousel-image'); // Optional: Add a class for styling
            imageElements.push(img);
        });

        resolve(imageElements);
    });
}

// Function to display images in the carousel
function displayImages(images) {
    const carouselContainer = document.getElementById('carousel');

    // Clear any existing content in the carousel
    carouselContainer.innerHTML = '';

    // Append each image to the carousel container
    images.forEach(image => {
        carouselContainer.appendChild(image);
    });
}

// Fetch images and display them when the page loads
window.onload = function() {
    fetchImages()
        .then(images => {
            displayImages(images);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
};



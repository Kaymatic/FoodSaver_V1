document.addEventListener('DOMContentLoaded', () => {
    // Handle signup form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(signupForm);
            const user = {
                username: formData.get('username'),
                email: formData.get('email'),
                password: formData.get('password')
            };
            console.log('Sign Up Data:', user);
            // Here you would typically send a POST request to your server
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(loginForm);
            const user = {
                email: formData.get('email'),
                password: formData.get('password')
            };
            console.log('Login Data:', user);
            // Here you would typically send a POST request to your server
        });
    }

    // Handle add listing form submission
    const addListingForm = document.getElementById('add-listing-form');
    if (addListingForm) {
        addListingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(addListingForm);
            const listing = {
                title: formData.get('title'),
                description: formData.get('description'),
                location: formData.get('location')
            };
            console.log('New Listing Data:', listing);
            // Here you would typically send a POST request to your server
        });
    }

    // Display listings
    const listingsContainer = document.getElementById('listings-container');
    if (listingsContainer) {
        const listings = [
            { id: 1, title: 'Breakfast Meals', description: 'Cocoa Drink with Omelette and Bread', location: 'Accra City Hotel' },
            { id: 2, title: 'Supper Meals', description: 'Jollof, Plain Rice, Banku with various proteins', location: 'Accra Central' },
            // Add more listings as needed
        ];

        listings.forEach(listing => {
            const listingDiv = document.createElement('div');
            listingDiv.classList.add('listing');
            listingDiv.innerHTML = `
                <h3>${listing.title}</h3>
                <p>${listing.description}</p>
                <p><strong>Location:</strong> ${listing.location}</p>
            `;
            listingsContainer.appendChild(listingDiv);
        });
    }
});

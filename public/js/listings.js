document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/listings')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const listingsSection = document.querySelector('.listings-section');
                data.listings.forEach(listing => {
                    const listingElement = document.createElement('div');
                    listingElement.className = 'listing';
                    listingElement.innerHTML = `
                        <h2>${listing.title}</h2>
                        <img src="${listing.imageUrl}" alt="${listing.title}">
                        <p>${listing.description}</p>
                    `;
                    listingsSection.appendChild(listingElement);
                });
            } else {
                alert('Failed to fetch listings: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

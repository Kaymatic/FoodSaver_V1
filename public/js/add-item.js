document.getElementById('addListingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', document.getElementById('title').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('image', document.getElementById('image').files[0]);

    fetch('/api/listings', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Listing added successfully!');
            window.location.href = 'listings.html';
        } else {
            alert('Failed to add listing: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

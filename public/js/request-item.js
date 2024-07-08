document.getElementById('requestItemForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    fetch('/api/requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Request submitted successfully!');
            window.location.href = 'listings.html';
        } else {
            alert('Failed to submit request: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

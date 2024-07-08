document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;

    fetch('/api/password/forgot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Password reset link sent to your email!');
        } else {
            alert('Failed to send password reset link: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

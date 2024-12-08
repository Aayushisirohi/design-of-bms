document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const email = emailInput.value;
        const password = passwordInput.value;

        // Simple validation
        if (validateEmail(email) && validatePassword(password)) {
            // Send data to the backend API
            sendLoginData(email, password);
        } else {
            alert('Please enter valid email and password.');
        }
    });

    function validateEmail(email) {
        // Basic email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        // Basic password validation (at least 6 characters)
        return password.length >= 6;
    }

    function sendLoginData(email, password) {
        const apiUrl = 'https://your-api-endpoint.com/login'; // Replace with your API endpoint

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Login successful!'); // Handle successful login
            // You can redirect the user or perform other actions here
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Login failed. Please try again.'); // Handle login failure
        });
    }
});

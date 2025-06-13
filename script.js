document.addEventListener('DOMContentLoaded', () => {
    // form and feedback elements (div selection)
    const form = document.getElementById('registration-form');
    const feedback = document.getElementById('form-feedback');

    // form submission event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent default form submission

        // Input retrieval and data trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Basic validation
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must contain '@' and '.' characters.");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = 'green';
        } else {
            feedbackDiv.textContent = messages.join(' ');
            feedbackDiv.style.color = 'red';
        }
    });
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy validation (replace this with actual validation logic)
    if (username === 'user' && password === 'password') {
        // Redirect to dashboard page after successful login
        window.location.href = 'dashboard.html';
    } else {
        // Display error message for invalid credentials
        const loginMessage = document.getElementById('loginMessage');
        loginMessage.textContent = 'Invalid username or password. Please try again.';
    }
});

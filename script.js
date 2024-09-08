document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');
    
    let strength = 0;

    // Basic strength checks
    if (password.length >= 8) strength += 20; // Length
    if (/[A-Z]/.test(password)) strength += 20; // Uppercase
    if (/[a-z]/.test(password)) strength += 20; // Lowercase
    if (/\d/.test(password)) strength += 20; // Number
    if (/[\W_]/.test(password)) strength += 20; // Special character

    // Update strength bar and text
    strengthBar.style.width = strength + '%';

    if (strength < 40) {
        strengthBar.style.backgroundColor = '#ff4d4d'; // Red
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#ff4d4d';
    } else if (strength < 70) {
        strengthBar.style.backgroundColor = '#ffcc00'; // Yellow
        strengthText.textContent = 'Moderate';
        strengthText.style.color = '#ffcc00';
    } else {
        strengthBar.style.backgroundColor = '#4dff4d'; // Green
        strengthText.textContent = 'Strong';
        strengthText.style.color = '#4dff4d';
    }
});

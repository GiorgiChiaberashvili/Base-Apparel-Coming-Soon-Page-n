const emailForm = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorDiv = document.getElementById('error-icon');
const errorDiv2 = document.getElementById('h5');

emailForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent the form from actually submitting

    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
        // Valid email format
        errorDiv.style.display = 'none';
        errorDiv2.style.display = 'none';
        emailInput.value = ''
    } else {
        // Invalid email format
        errorDiv.style.display = 'block';
        errorDiv2.style.display = 'block';
    }
});
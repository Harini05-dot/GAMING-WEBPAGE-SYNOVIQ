document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent form from submitting until validation is complete

    // Clear all previous error messages
    clearErrors();

    // Validate all fields
    let valid = true;

    // Name Validation
    const name = document.getElementById("name").value;
    if (name.length < 3 || name.length > 50) {
        showError("name-error", "Name must be between 3 and 50 characters.");
        valid = false;
    }

    // Age Validation: Must be 18 or older
    const age = document.getElementById("age").value;
    if (age < 18) {
        showError("age-error", "You must be 18 or older to sign up.");
        valid = false;
    }

    // Gender Validation
    const gender = document.getElementById("gender").value;
    if (!gender) {
        showError("gender-error", "Please select your gender.");
        valid = false;
    }

    // Email Validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showError("email-error", "Please enter a valid email address.");
        valid = false;
    }

    // Password Validation
    const password = document.getElementById("password").value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (!passwordPattern.test(password)) {
        showError("password-error", "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.");
        valid = false;
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById("confirm-password").value;
    if (confirmPassword !== password) {
        showError("confirm-password-error", "Passwords do not match.");
        valid = false;
    }

    // If all validations pass, submit the form (or proceed with the signup process)
    if (valid) {
        alert("Form is valid, proceed with sign up!");
        // You can submit the form here or trigger further actions as needed
    }
});

// Helper function to show error messages
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
    document.getElementById(elementId).style.color = "red";
}

// Helper function to clear previous error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-msg");
    errorMessages.forEach((error) => {
        error.textContent = "";
    });
}

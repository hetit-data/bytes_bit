class ExtendedRegistrationForm {
    constructor() {
        this.form = document.getElementById('extendedRegistrationForm');
        this.nameField = document.getElementById('name');
        this.emailField = document.getElementById('email');
        this.passwordField = document.getElementById('password');
        this.confirmPasswordField = document.getElementById('confirmPassword');
        this.mobileField = document.getElementById('mobile');
        this.addressField = document.getElementById('address');

        // Event listener for form submission
        this.form.addEventListener('submit', (e) => this.validateForm(e));
    }

    // Validate form fields
    validateForm(e) {
        e.preventDefault(); // Prevent form submission

        // Validate name
        if (!this.validateName(this.nameField.value)) {
            alert("Name must be between 3 and 6 alphabets, no numbers allowed.");
            this.nameField.focus();
            return;
        }

        // Validate email
        if (!this.validateEmail(this.emailField.value)) {
            alert("Please enter a valid email address.");
            this.emailField.focus();
            return;
        }

        // Validate password
        if (!this.validatePassword(this.passwordField.value)) {
            alert("Password must be at least 6 characters and include a number.");
            this.passwordField.focus();
            return;
        }

        // Validate confirm password
        if (this.passwordField.value !== this.confirmPasswordField.value) {
            alert("Passwords do not match.");
            this.confirmPasswordField.focus();
            return;
        }

        // Validate mobile
        if (!this.validateMobile(this.mobileField.value)) {
            alert("Mobile number must be 10 digits and contain only numbers.");
            this.mobileField.focus();
            return;
        }

        // Validate address (minimum length)
        if (this.addressField.value.trim().length < 10) {
            alert("Address must be at least 10 characters long.");
            this.addressField.focus();
            return;
        }

        console.log("Form Submitted Successfully!");
        console.log("Name:", this.nameField.value);
        console.log("Email:", this.emailField.value);
        console.log("Mobile:", this.mobileField.value);
        console.log("Address:", this.addressField.value);
    }

    // Validate name using regex
    validateName(name) {
        const nameRegex = /^[A-Za-z]{3,6}$/;
        return nameRegex.test(name);
    }

    // Validate email using regex
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate password (at least 6 characters, with at least 1 number)
    validatePassword(password) {
        const passwordRegex = /^(?=.*[0-9])(?=.{6,})/;
        return passwordRegex.test(password);
    }

    // Validate mobile using regex
    validateMobile(mobile) {
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(mobile);
    }
}

// Initialize the form validation on page load
window.addEventListener('DOMContentLoaded', () => new ExtendedRegistrationForm());

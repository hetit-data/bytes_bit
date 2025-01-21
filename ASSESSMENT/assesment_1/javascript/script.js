
function validateForm() {
   
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var mobile = document.getElementById("mobile");
    var address = document.getElementById("address");

    if (!validateName(name.value)) {
        alert("Name must contain only alphabets and be between 3 to 20 characters.");
        name.focus();
        return false;
    }

    if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return false;
    }


    if (!validatePassword(password.value)) {
        alert("Password must be at least 6 characters long and contain a combination of letters and numbers.");
        password.focus();
        return false;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match. Please re-enter.");
        confirmPassword.focus();
        return false;
    }


    if (!validateMobile(mobile.value)) {
        alert("Mobile number must be exactly 10 digits and numeric.");
        mobile.focus();
        return false;
    }

 
    if (address.value.trim() === "") {
        alert("Address cannot be empty.");
        address.focus();
        return false;
    }

    alert("Registration Successful!");
    return true;
}

function validateName(name) {
    var nameRegex = /^[a-zA-Z\s]{3,20}$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
}

function validatePassword(password) {
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; 
    return passwordRegex.test(password);
}

function validateMobile(mobile) {
    var mobileRegex = /^\d{10}$/; 
    return mobileRegex.test(mobile);
}


var form = document.getElementById("extendedRegistrationForm");
form.onsubmit = function() {
    return validateForm(); 
};

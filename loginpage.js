// Get inputs and button
const name = document.getElementById("name");
const email = document.getElementById("email_id");
const password = document.getElementById("password");
const submitBtn = document.getElementById("login");

// Get error elements
const nameError = document.querySelector(".nameerror");
const mailError = document.querySelector(".mailerror");
const passError = document.querySelector(".pass_error");

// Hide submit button at start
submitBtn.style.display = "none";

// Simple regex
const nameRegex = /^[A-Za-z]+$/;                    // Only letters
const emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;     // Only Gmail
const passRegex = /^[A-Za-z0-9]{6,}$/;              // Letters + numbers, min 6

// Check all fields and show/hide errors + button
function validateAll() {
    let allGood = true;

    // Name check
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameError.style.display = "block";
        allGood = false;
    }
    else if (!nameRegex.test(name.value.trim())) {
        nameError.textContent = "Only letters allowed";
        nameError.style.display = "block";
        allGood = false;
    }
    else {
        nameError.style.display = "none";
    }

    // Email check
    if (email.value.trim() === "") {
        mailError.textContent = "Email is required";
        mailError.style.display = "block";
        allGood = false;
    }
    else if (!emailRegex.test(email.value.trim())) {
        mailError.textContent = "Must be a Gmail address";
        mailError.style.display = "block";
        allGood = false;
    }
    else {
        mailError.style.display = "none";
    }

    // Password check
    if (password.value === "") {
        passError.textContent = "Password is required";
        passError.style.display = "block";
        allGood = false;
    }
    else if (!passRegex.test(password.value)) {
        passError.textContent = "Min 6 characters, letters & numbers only";
        passError.style.display = "block";
        allGood = false;
    }
    else {
        passError.style.display = "none";
    }

    // Show button only if all valid
    if (allGood) {
        submitBtn.style.display = "block";
    } else {
        submitBtn.style.display = "none";
    }
}

// Run validation when user types
name.addEventListener("input", validateAll);
email.addEventListener("input", validateAll);
password.addEventListener("input", validateAll);

// On submit click
submitBtn.addEventListener("click", function() {
    alert("Login Successful! 😎");
});
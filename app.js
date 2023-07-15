const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const lnameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const inputtxt = document.querySelectorAll(".input-txt");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  let isValid = true;
  // Reset validation styles
  removeValidationStyles();

  // Check if inputs are empty
  if (nameInput.value.trim() === "") {
    displayValidationError(nameInput, "First Name cannot be empty");
    isValid = false;
    nameInput.style.border = "1px solid var(--Red)";
  }

  if (lnameInput.value.trim() === "") {
    displayValidationError(lnameInput, "Last Name cannot be empty");
    isValid = false;
    lnameInput.style.border = "1px solid var(--Red)";
  }

  if (emailInput.value.trim() === "") {
    displayValidationError(emailInput, "Email Address cannot be empty");
    isValid = false;
    emailInput.style.border = "1px solid var(--Red)";
  } else if (!isValidEmail(emailInput.value)) {
    displayValidationError(emailInput, "Looks like this is not a valid email");
    isValid = false;
    emailInput.style.border = "1px solid var(--Red)";
  }

  if (passInput.value.trim() === "") {
    displayValidationError(passInput, "Password cannot be empty");
    isValid = false;
    passInput.style.border = "1px solid var(--Red)";
  }

  if (isValid) {
    // Form is valid, submit it or perform further actions
    form.submit();
  }
}

function displayValidationError(inputElement, errorMessage) {
  const formGroup = inputElement.parentElement;
  const errorIcon = formGroup.querySelector(".fa-triangle-exclamation");
  const errorLabel = formGroup.querySelector(".label");

  formGroup.classList.add("error");
  errorIcon.classList.remove("hidden");
  errorLabel.textContent = errorMessage;
  errorLabel.classList.remove("hidden");
}

function removeValidationStyles() {
  const formGroups = document.querySelectorAll(".form-group");

  formGroups.forEach(function (formGroup) {
    formGroup.classList.remove("error");
    const errorIcon = formGroup.querySelector(".fa-triangle-exclamation");
    const errorLabel = formGroup.querySelector(".label");

    errorIcon.classList.add("hidden");
    errorLabel.classList.add("hidden");
  });
}

function isValidEmail(email) {
  // Use a regular expression to check if the email is valid
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

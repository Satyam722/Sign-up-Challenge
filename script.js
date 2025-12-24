const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");
const form = document.getElementById("signupForm");

function validateEmail(value) {
  if (value.length <= 3) {
    return "Email must be more than 3 characters";
  }
  if (!value.includes("@") || !value.includes(".")) {
    return "Email must contain @ and .";
  }
  return "";
}

function validatePassword(value) {
  if (value.length <= 8) {
    return "Password must be more than 8 characters";
  }
  return "";
}

emailInput.addEventListener("input", () => {
  emailError.textContent = validateEmail(emailInput.value);
  updateSuccessMessage();
});

passwordInput.addEventListener("input", () => {
  passwordError.textContent = validatePassword(passwordInput.value);
  updateSuccessMessage();
});

function updateSuccessMessage() {
  if (
    emailInput.value &&
    passwordInput.value &&
    emailError.textContent === "" &&
    passwordError.textContent === ""
  ) {
    successMsg.textContent = "All good to go";
  } else {
    successMsg.textContent = "";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  emailError.textContent = validateEmail(emailInput.value);
  passwordError.textContent = validatePassword(passwordInput.value);

  if (emailError.textContent || passwordError.textContent) return;

  const confirmSubmit = confirm("Are you sure you want to submit?");
  if (confirmSubmit) {
    alert("Successful signup!");
  } else {
    form.reset();
    emailError.textContent = "";
    passwordError.textContent = "";
    successMsg.textContent = "";
  }
});

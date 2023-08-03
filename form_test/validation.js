const form = document.querySelector("form");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const zipcode = document.getElementById("zipcode");
const zipcodeError = document.querySelector("#zipcode + span.error");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const passwordRepeat = document.getElementById("password-repeat");
const passwordRepeatError = document.querySelector(
  "#password-repeat + span.error"
);

function addValidityForInput(element, elementError) {
  //call this for everything
  element.addEventListener("input", (event) => {
    if (element.validity.valid) {
      elementError.textContent = "";
      elementError.className = "error";
    } else {
      showError(element, elementError);
    }
  });
}

form.addEventListener("submit", (event) => {
  if (
    !email.validity.valid ||
    !country.validity.valid ||
    !zipcode.validity.valid ||
    !password.validity.valid ||
    !passwordRepeat.validity.valid
  ) {
    showError(element, elementError);
    event.preventDefault();
  }
});

function showError(element, elementError) {
  if (element.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    elementError.textContent = `You need to enter an ${element.type}`;
  } else if (element.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    elementError.textContent = `Entered value needs to be an ${element.type}`;
  } else if (element.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    elementError.textContent = `Value is too short`;
  }

  // Set the styling appropriately
  elementError.className = "error active";
}

addValidityForInput(country, countryError);
addValidityForInput(zipcode, zipcodeError);

addValidityForInput(email, emailError);

addValidityForInput(password, passwordError);

addValidityForInput(passwordRepeat, passwordRepeatError);

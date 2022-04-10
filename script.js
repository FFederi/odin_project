function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

var displayValue = "0";

function updateDisplay(value) {
  displayValue = value;
  var display = document.querySelector(".display");
  display.textContent = displayValue;
}

var buttons = document.querySelectorAll("button");

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("operator")) {
      var oper = "";
      switch (element.textContent) {
        case ("+", "-", "*", "/"): {
          oper = element.textContent;
          var previousDisplay = displayValue;
          displayValue = "0";
        }
        case "C":
          displayValue = "0";
        case "=":
          displayValue = operate(oper, previousDisplay, displayValue);
      }
    } else {
      displayValue += element.textContent;
    }
    updateDisplay(displayValue);
  });
});

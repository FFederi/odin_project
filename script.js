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
  a = parseInt(a);
  b = parseInt(b);

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

var displayValue = "";

function updateDisplay(value) {
  displayValue = value;
  var display = document.querySelector(".display");
  display.textContent = displayValue;
}

var buttons = document.querySelectorAll("button");

var oper = "";
var previousDisplay = 0;

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("operator")) {
      switch (element.textContent) {
        case "+":
        case "-":
        case "*":
        case "/": {
          previousDisplay = displayValue;
          oper = element.textContent;
          displayValue = "";
          break;
        }
        case "C": {
          previousDisplay = displayValue;
          displayValue = "";
          break;
        }
        case "=":
          displayValue = operate(oper, previousDisplay, displayValue);
      }
    } else {
      displayValue += element.textContent;
    }
    updateDisplay(displayValue);
  });
});

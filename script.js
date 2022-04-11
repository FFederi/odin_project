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

var displayValue = "0";

function updateDisplay(value) {
  displayValue = parseInt(value);
  var display = document.querySelector(".display");
  display.textContent = displayValue;
}

var buttons = document.querySelectorAll("button");

var oper = "";
var previousDisplay = 0;
var a = 0;
var b = 0;

var result = 1;

var toOperate = [];

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("operator")) {
      switch (element.textContent) {
        case "+":
        case "-":
        case "*":
        case "/": {
          oper = element.textContent;
          toOperate.push(displayValue);

          if (toOperate.length === 2) {
            result = operate(oper, toOperate[0], toOperate[1]);
            toOperate = [result];

            updateDisplay(result);
            break;
          } else {
            displayValue = "0";
            updateDisplay(displayValue);
            break;
          }
        }
        case "C": {
          displayValue = "0";
          updateDisplay(displayValue);

          break;
        }
        case "=":
          result = operate(oper, toOperate[0], displayValue);
          toOperate = [];
          updateDisplay(result);
          result = 0;
      }
    } else {
      displayValue += element.textContent;
      updateDisplay(displayValue);
    }
  });
});

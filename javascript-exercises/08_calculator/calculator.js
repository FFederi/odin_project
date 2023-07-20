const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(toSum) {
  let sum = 0
	for (num in toSum) {
    sum += toSum[num]
  }
  
  //let result = toSum.reduce((a, b) => a + b, 0)
  return sum
};

const multiply = function(toMultiply) {
  return toMultiply.reduce((a, b) => a * b, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(x) {
	if (x === 0) {
    return 1
  }
  return x * factorial(x - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

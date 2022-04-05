const fibonacci = function(x) {
    if (typeof(x) === 'string') {
        var x = parseInt(x)
    }
    if (x < 0) {
        return "OOPS"
    }
    if (x <= 1) {
        return x
    }
    let fib2 = fibonacci(x-2);
    return fib2 + fibonacci(x-1)
};

// Do not edit below this line
module.exports = fibonacci;

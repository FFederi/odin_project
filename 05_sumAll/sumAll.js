const sumAll = function(first, second) {
    let sum = 0
    if ((typeof(first) | typeof(second) !=  "number") | 
        (first < 0) | (second < 0)) {
        return "ERROR"
    }
    if (first > second) {
        let temp = 0;
        temp = first;
        first = second;
        second = temp;
    } 
    for (let i=first; i<second + 1; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;

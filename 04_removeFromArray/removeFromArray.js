const removeFromArray = function(array, ...toRemove) {
    //let args = array.from(arguments.slice(1))

    for (let elem in toRemove) {
        const indexToRemove = array.indexOf(toRemove[elem])
        if (indexToRemove == -1) {
            continue
        }
        array.splice(indexToRemove, 1)
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;

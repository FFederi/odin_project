const palindromes = function (s) {
    let S = s.toUpperCase()
    let punctless = S.replace(/[.,\/#!$%\^&\*\s;:{}=\-_`~()]/g,"")
    return punctless === punctless.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

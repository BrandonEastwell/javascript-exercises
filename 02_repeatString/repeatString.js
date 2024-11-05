const repeatString = function(string, num) {
    let newString = "";
    while (num > 0) {
        newString = newString + string;
        num--;
    }
    if (num < 0) {
        return "ERROR"
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;

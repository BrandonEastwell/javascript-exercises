const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    if (typeof(firstNum) !== "number" || typeof(secondNum) !== "number") {
        return "ERROR"
    } else if ((firstNum % 1) !== 0 || (secondNum % 1) !== 0) {
        return "ERROR"
    } else if (firstNum < 0 || secondNum < 0) {
        return "ERROR"
    }
    if (firstNum <= secondNum) {
        while(firstNum <= secondNum) {
            sum += firstNum;
            firstNum++
        }
    } else {
        while(secondNum <= firstNum) {
            sum += secondNum;
            secondNum++
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;

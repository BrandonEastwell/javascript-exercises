const fibonacci = function(num) {
    let sequence = []
    let count = 0
    if (Math.sign(num) === 0) {
        return 0;
    } else if (Math.sign(num) === -1) {
        return "OOPS"
    } else if (Math.sign(num) === 1) {
        while(count < num) {
            if (count < 2) {
                sequence.push(1)
            } else {
                sequence.push(sequence[count-1] + sequence[count-2]);
            }
            count++;
        }
    }
    return sequence[sequence.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;

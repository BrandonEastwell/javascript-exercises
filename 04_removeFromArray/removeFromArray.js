const removeFromArray = function(array, ...otherArgs) {
    for (const args of otherArgs) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === args) {
                array.splice(i, 1);
                i--
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;

const add = function(VALUE_ONE, VALUE_TWO) {
    return VALUE_ONE + VALUE_TWO
};

const subtract = function(VALUE_ONE, VALUE_TWO) {
	return VALUE_ONE - VALUE_TWO
};

const sum = function(ARRAY) {
    return ARRAY.reduce((product, current) => product + current, 0)
};

const multiply = function(ARRAY) {
    return ARRAY.reduce((product, current) => (product * current))
};

const power = function(VALUE_ONE, VALUE_TWO) {
    return Math.pow(VALUE_ONE, VALUE_TWO)
};

const factorial = function(VALUE) {
	if (VALUE < 0) {
      return -1;
    } else if (VALUE === 0) {
      return 1;
    } else {
      return (VALUE * factorial(VALUE - 1))
    }
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

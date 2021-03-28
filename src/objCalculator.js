const assert = require('assert');

const calculator = {
  add: (first, second) => { parseFloat(first + second); },
  mult: (first, second) => { parseFloat(first * second); },
  divisor: (first, second) => { parseFloat(first / second); },
  subtra: (first, second) => { parseFloat(first - second); },
};

module.exports = calculator;

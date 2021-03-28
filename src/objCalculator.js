const calculator = {
  add: (first, second) => { Math.floor(first + second); },
  mult: (first, second) => { Math.floor(first * second); },
  divisor: (first, second) => { Math.floor(first / second); },
  subtra: (first, second) => { Math.floor(first - second); },
};

module.exports = calculator;

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Divisão por zero não é permitida');
    }
    return a / b;
  }

  isEven(n) {
    return n % 2 === 0;
  }

  power(base, exponent) {
    return Math.pow(base, exponent);
  }
}

module.exports = Calculator;

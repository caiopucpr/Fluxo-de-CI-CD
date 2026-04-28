// calculator.js - Código para testar
class Calculator {
  // Soma dois números
  add(a, b) {
    return a + b;
  }

  // Subtrai dois números
  subtract(a, b) {
    return a - b;
  }

  // Multiplica dois números
  multiply(a, b) {
    return a * b;
  }

  // Divide dois números
  divide(a, b) {
    if (b === 0) {
      throw new Error('Divisão por zero não é permitida');
    }
    return a / b;
  }

  // Verifica se um número é par
  isEven(n) {
    return n % 2 === 0;
  }
}

module.exports = Calculator;

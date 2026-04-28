// calculator.test.js - Testes unitários
const Calculator = require('./calculator');

describe('Testes unitários da Calculadora', () => {
  let calc;

  // Executa antes de cada teste
  beforeEach(() => {
    calc = new Calculator();
  });

  // Teste 1: Soma
  test('Teste 1: Deve somar dois números corretamente', () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(-1, 5)).toBe(4);
    expect(calc.add(0, 0)).toBe(0);
  });

  // Teste 2: Subtração
  test('Teste 2: Deve subtrair dois números corretamente', () => {
    expect(calc.subtract(10, 4)).toBe(6);
    expect(calc.subtract(0, 5)).toBe(-5);
    expect(calc.subtract(-3, -2)).toBe(-1);
  });

  // Teste 3: Multiplicação
  test('Teste 3: Deve multiplicar dois números corretamente', () => {
    expect(calc.multiply(4, 5)).toBe(20);
    expect(calc.multiply(-2, 3)).toBe(-6);
    expect(calc.multiply(0, 10)).toBe(0);
  });

  // Teste 4: Divisão
  test('Teste 4: Deve dividir dois números corretamente', () => {
    expect(calc.divide(10, 2)).toBe(5);
    expect(calc.divide(7, 2)).toBe(3.5);
    expect(calc.divide(-8, 2)).toBe(-4);
  });

  // Teste 5: Divisão por zero
  test('Teste 5: Deve lançar erro ao dividir por zero', () => {
    expect(() => calc.divide(5, 0)).toThrow('Divisão por zero não é permitida');
  });

  // Teste 6 extra: Verificar número par
  test('Teste 6: Deve identificar números pares corretamente', () => {
    expect(calc.isEven(4)).toBe(true);
    expect(calc.isEven(7)).toBe(false);
    expect(calc.isEven(0)).toBe(true);
  });
});

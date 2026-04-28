const Calculator = require('./calculator');

describe('Testes unitários da Calculadora', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  // Teste 1: Soma
  test('Deve somar dois números corretamente', () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(-1, 5)).toBe(4);
    expect(calc.add(0, 0)).toBe(0);
  });

  // Teste 2: Subtração
  test('Deve subtrair dois números corretamente', () => {
    expect(calc.subtract(10, 4)).toBe(6);
    expect(calc.subtract(0, 5)).toBe(-5);
    expect(calc.subtract(-3, -2)).toBe(-1);
  });

  // Teste 3: Multiplicação
  test('Deve multiplicar dois números corretamente', () => {
    expect(calc.multiply(4, 5)).toBe(20);
    expect(calc.multiply(-2, 3)).toBe(-6);
    expect(calc.multiply(0, 10)).toBe(0);
  });

  // Teste 4: Divisão
  test('Deve dividir dois números corretamente', () => {
    expect(calc.divide(10, 2)).toBe(5);
    expect(calc.divide(7, 2)).toBe(3.5);
    expect(calc.divide(-8, 2)).toBe(-4);
  });

  // Teste 5: Divisão por zero
  test('Deve lançar erro ao dividir por zero', () => {
    expect(() => calc.divide(5, 0)).toThrow('Divisão por zero não é permitida');
  });

  // Teste 6: Verificar número par
  test('Deve identificar números pares corretamente', () => {
    expect(calc.isEven(4)).toBe(true);
    expect(calc.isEven(7)).toBe(false);
    expect(calc.isEven(0)).toBe(true);
  });

  // Teste 7: Potência
  test('Deve calcular potência corretamente', () => {
    expect(calc.power(2, 3)).toBe(8);
    expect(calc.power(5, 0)).toBe(1);
    expect(calc.power(10, 1)).toBe(10);
  });
});

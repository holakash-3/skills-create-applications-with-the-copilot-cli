const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  
  // ========== ADDITION TESTS ==========
  describe('Addition (add)', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -5)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-10, -5)).toBe(-15);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('should be commutative (a + b = b + a)', () => {
      expect(add(7, 3)).toBe(add(3, 7));
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ========== SUBTRACTION TESTS ==========
  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract negative from positive', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract positive from negative', () => {
      expect(subtract(-10, 5)).toBe(-15);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-10, -5)).toBe(-5);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should handle decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });

    test('should handle same numbers (result is zero)', () => {
      expect(subtract(42, 42)).toBe(0);
    });
  });

  // ========== MULTIPLICATION TESTS ==========
  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should handle decimal numbers', () => {
      expect(multiply(2.5, 4.0)).toBeCloseTo(10);
    });

    test('should be commutative (a * b = b * a)', () => {
      expect(multiply(6, 7)).toBe(multiply(7, 6));
    });

    test('should handle large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });

    test('should multiply fractional numbers', () => {
      expect(multiply(0.5, 0.5)).toBeCloseTo(0.25);
    });
  });

  // ========== DIVISION TESTS ==========
  describe('Division (divide)', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive by negative', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide number by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should handle decimal numbers', () => {
      expect(divide(10, 4)).toBeCloseTo(2.5);
    });

    test('should handle division resulting in decimal', () => {
      expect(divide(5, 2)).toBeCloseTo(2.5);
    });

    test('should handle division of zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error for division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Error: Division by zero is not allowed');
    });

    test('should throw error for division by zero with negative', () => {
      expect(() => divide(-10, 0)).toThrow('Error: Division by zero is not allowed');
    });

    test('should throw error for zero divided by zero', () => {
      expect(() => divide(0, 0)).toThrow('Error: Division by zero is not allowed');
    });

    test('should handle very small divisors (not zero)', () => {
      expect(divide(10, 0.0001)).toBeCloseTo(100000);
    });

    test('should handle fractional division', () => {
      expect(divide(0.5, 0.25)).toBeCloseTo(2);
    });
  });

  // ========== MODULO TESTS ==========
  describe('Modulo (modulo)', () => {
    test('should return remainder of 5 % 2', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should return remainder of 10 % 3', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should return zero when dividend is divisible by divisor', () => {
      expect(modulo(20, 5)).toBe(0);
    });

    test('should handle negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should handle negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should handle two negative numbers', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should handle modulo by one', () => {
      expect(modulo(42, 1)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Error: Modulo by zero is not allowed');
    });

    test('should throw error for modulo by zero with negative', () => {
      expect(() => modulo(-10, 0)).toThrow('Error: Modulo by zero is not allowed');
    });

    test('should handle large numbers', () => {
      expect(modulo(1000000, 7)).toBe(1);
    });
  });

  // ========== EXPONENTIATION TESTS ==========
  describe('Exponentiation (power)', () => {
    test('should raise 2 to the power of 3', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should raise 2 to the power of 8', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should return 1 when exponent is 0', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should raise number to power of 1', () => {
      expect(power(42, 1)).toBe(42);
    });

    test('should handle negative exponents (reciprocal)', () => {
      expect(power(2, -1)).toBeCloseTo(0.5);
    });

    test('should handle negative base with even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should handle negative base with odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle decimal bases', () => {
      expect(power(2.5, 2)).toBeCloseTo(6.25);
    });

    test('should handle decimal exponents', () => {
      expect(power(4, 0.5)).toBeCloseTo(2);
    });

    test('should handle large exponents', () => {
      expect(power(10, 3)).toBe(1000);
    });

    test('should handle fractional bases and exponents', () => {
      expect(power(0.5, 2)).toBeCloseTo(0.25);
    });

    test('should raise 0 to a positive power', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle negative base with negative exponent', () => {
      expect(power(-2, -2)).toBeCloseTo(0.25);
    });
  });

  // ========== SQUARE ROOT TESTS ==========
  describe('Square Root (squareRoot)', () => {
    test('should return square root of 16', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should return square root of 25', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should return square root of 2', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should return square root of perfect squares', () => {
      expect(squareRoot(9)).toBe(3);
    });

    test('should return 1 for square root of 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should return 0 for square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(squareRoot(0.25)).toBeCloseTo(0.5);
    });

    test('should handle large numbers', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should handle numbers less than 1', () => {
      expect(squareRoot(0.04)).toBeCloseTo(0.2);
    });

    test('should throw error for negative numbers', () => {
      expect(() => squareRoot(-9)).toThrow('Error: Cannot calculate square root of negative numbers');
    });

    test('should throw error for any negative number', () => {
      expect(() => squareRoot(-1)).toThrow('Error: Cannot calculate square root of negative numbers');
    });

    test('should throw error for negative decimal', () => {
      expect(() => squareRoot(-0.5)).toThrow('Error: Cannot calculate square root of negative numbers');
    });

    test('should handle very small positive numbers', () => {
      expect(squareRoot(0.0001)).toBeCloseTo(0.01);
    });
  });

  // ========== EXTENDED OPERATIONS TESTS ==========
  describe('Extended Operations (based on calc-extended-operations.png)', () => {
    test('should perform modulo: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should perform power: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should perform square root: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });
  });

  // ========== INTEGRATION/COMBINED TESTS ==========
  describe('Operation Combinations', () => {
    test('should chain operations correctly', () => {
      // (2 + 3) * 2 = 10
      const step1 = add(2, 3);
      const step2 = multiply(step1, 2);
      expect(step2).toBe(10);
    });

    test('should handle order of operations manually', () => {
      // 45 * 2 - 10 = 80
      const step1 = multiply(45, 2);
      const step2 = subtract(step1, 10);
      expect(step2).toBe(80);
    });

    test('should combine all four basic operations', () => {
      // (20 / 5) + (10 - 4) * 2 = 4 + 12 = 16
      const div = divide(20, 5);
      const sub = subtract(10, 4);
      const mul = multiply(sub, 2);
      const result = add(div, mul);
      expect(result).toBe(16);
    });

    test('should combine new operations with existing ones', () => {
      // √16 + 2^3 = 4 + 8 = 12
      const sqrt = squareRoot(16);
      const pow = power(2, 3);
      const result = add(sqrt, pow);
      expect(result).toBe(12);
    });

    test('should combine power and modulo', () => {
      // 2^5 % 10 = 32 % 10 = 2
      const pow = power(2, 5);
      const result = modulo(pow, 10);
      expect(result).toBe(2);
    });

    test('should combine square root and multiplication', () => {
      // √9 * 5 = 3 * 5 = 15
      const sqrt = squareRoot(9);
      const result = multiply(sqrt, 5);
      expect(result).toBe(15);
    });
  });

  // ========== EDGE CASES ==========
  describe('Edge Cases and Special Scenarios', () => {
    test('should handle very large numbers', () => {
      expect(add(999999999, 1)).toBe(1000000000);
    });

    test('should handle very small decimal numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle negative zero correctly', () => {
      expect(add(-5, 5)).toBe(0);
    });

    test('should handle operations with very close floating point numbers', () => {
      const result = divide(1, 3);
      expect(multiply(result, 3)).toBeCloseTo(1);
    });
  });
});

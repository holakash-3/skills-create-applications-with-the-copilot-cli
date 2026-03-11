#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (sqrt)
 * 
 * Usage: node calculator.js <number1> <operation> <number2>
 * Example: node calculator.js 10 + 5
 */

// Addition operation
function add(a, b) {
  return a + b;
}

// Subtraction operation
function subtract(a, b) {
  return a - b;
}

// Multiplication operation
function multiply(a, b) {
  return a * b;
}

// Division operation with error handling for division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Error: Division by zero is not allowed');
  }
  return a / b;
}

// Modulo operation - returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Error: Modulo by zero is not allowed');
  }
  return a % b;
}

// Exponentiation operation - returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root operation with error handling for negative numbers
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Error: Cannot calculate square root of negative numbers');
  }
  return Math.sqrt(n);
}

// Map of supported operations
const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
  '%': modulo,
  '^': power
};

// Special operations that only take one operand
const unaryOperations = {
  'sqrt': squareRoot
};

// Main CLI handler
function main() {
  const args = process.argv.slice(2);

  // Check for unary operations (sqrt)
  if (args.length === 2 && unaryOperations[args[0]]) {
    const [operation, numStr] = args;
    const num = parseFloat(numStr);

    if (isNaN(num)) {
      console.error('Error: Operand must be a valid number');
      process.exit(1);
    }

    try {
      const result = unaryOperations[operation](num);
      console.log(result);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
    return;
  }

  // Validate input arguments for binary operations
  if (args.length !== 3) {
    console.error('Usage: calculator <number1> <operation> <number2>');
    console.error('        calculator <operation> <number>');
    console.error('Supported binary operations: +, -, *, /, %, ^');
    console.error('Supported unary operations: sqrt');
    console.error('Examples: calculator 10 + 5');
    console.error('          calculator sqrt 16');
    process.exit(1);
  }

  const [num1Str, operation, num2Str] = args;
  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);

  // Validate that inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both operands must be valid numbers');
    process.exit(1);
  }

  // Validate that operation is supported
  if (!operations[operation]) {
    console.error(`Error: Unsupported operation '${operation}'`);
    console.error('Supported binary operations: +, -, *, /, %, ^');
    process.exit(1);
  }

  try {
    const result = operations[operation](num1, num2);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
};

// Run CLI if this file is executed directly
if (require.main === module) {
  main();
}

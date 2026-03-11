#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
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

// Map of supported operations
const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide
};

// Main CLI handler
function main() {
  const args = process.argv.slice(2);

  // Validate input arguments
  if (args.length !== 3) {
    console.error('Usage: calculator <number1> <operation> <number2>');
    console.error('Supported operations: +, -, *, /');
    console.error('Example: calculator 10 + 5');
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
    console.error('Supported operations: +, -, *, /');
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
  divide
};

// Run CLI if this file is executed directly
if (require.main === module) {
  main();
}

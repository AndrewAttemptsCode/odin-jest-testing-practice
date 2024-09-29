// A calculator object that contains functions 
// for the basic operations: add, subtract, divide, 
// and multiply. Each of these functions should 
// take two numbers and return the correct calculation.

export const calculator = {
  'add': (a, b) => a + b,
  'subtract': (a, b) => a - b,
  'multiply': (a, b) => a * b,
  'divide': (a, b) => {
    if (b === 0) {
      throw new Error('Cannot divide by zero.');
    }
    return a / b;
  }
}
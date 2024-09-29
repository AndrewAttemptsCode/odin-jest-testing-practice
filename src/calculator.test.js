// A calculator object that contains functions 
// for the basic operations: add, subtract, divide, 
// and multiply. Each of these functions should 
// take two numbers and return the correct calculation.

import { calculator } from "./calculator";

test('Adds two numbers', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(-1, 1)).toBe(0);
  expect(calculator.add(-1, -1)).toBe(-2);
})

test('Subtract two numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.subtract(3, 5)).toBe(-2);
  expect(calculator.subtract(-1, -1)).toBe(0);
})

test('Divide two numbers', () => {
  expect(calculator.divide(6, 3)).toBe(2);
  expect(calculator.divide(-6, 3)).toBe(-2);
  expect(calculator.divide(-6, -3)).toBe(2);
})

test('Multiply two numbers', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
  expect(calculator.multiply(-2, 3)).toBe(-6);
  expect(calculator.multiply(-2, -3)).toBe(6);
})

test('Divides by zero', () => {
  expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero.');
})
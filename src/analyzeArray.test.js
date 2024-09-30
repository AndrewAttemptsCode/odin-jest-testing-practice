// An analyzeArray function that takes an array of numbers 
// and returns an object with the following properties: 
// average, min, max, and length.

import { analyzeArray } from "./analyzeArray";

test('average', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.average).toBe(4);
})

test('min', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.min).toBe(1);
})

test('max', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.max).toBe(8);
})

test('length', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.length).toBe(6);
})
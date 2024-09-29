// A reverseString function that takes a string 
// and returns it reversed.

import { reverseString } from "./reverseString";

test('Reverse a string', () => {
  expect(reverseString('testing')).toBe('gnitset');
})

test('Reverse another string', () => {
  expect(reverseString('test')).toBe('tset');
})

test('Empty string', () => {
  expect(reverseString('')).toBe('');
})

test('Single letter', () => {
  expect(reverseString('a')).toBe('a');
})

test('Works on palindrome', () => {
  expect(reverseString('racecar')).toBe('racecar');
})

test('Works with special characters', () => {
  expect(reverseString('testing!')).toBe('!gnitset');
})

test('String with spaces', () => {
  expect(reverseString('testing this sentence')).toBe('ecnetnes siht gnitset');
})

test('Works with numbers', () => {
  expect(reverseString('12345')).toBe('54321');
})

// A capitalize function that takes a string 
// and returns it with the first character capitalized.

import { capitalize } from "./capitalize";

test('Capitalize first character', () => {
  expect(capitalize('testing')).toBe('Testing');
})

test('String is empty', () => {
  expect(capitalize('')).toBe('');
})

test('Single character', () => {
  expect(capitalize('t')).toBe('T');
})

test('Already capitalized', () => {
  expect(capitalize('Testing')).toBe('Testing');
})

test('Already all capitalized', () => {
  expect(capitalize('TESTING')).toBe('TESTING');
})

test('Leading and trailing spaces', () => {
  expect(capitalize('   testing  ')).toBe('Testing');
})

test('Ignores starting with non-alphabet characters', () => {
  expect(capitalize('!testing')).toBe('!testing');
})

// A caesarCipher function that takes a string 
// and a shift factor and returns it with each character “shifted”. 

import { caesarCipher } from "./caesarCipher";

test('Lower and upper case', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('Allows special char and white space', () => {
  expect(caesarCipher('hello, world!', 3)).toBe('khoor, zruog!');
})

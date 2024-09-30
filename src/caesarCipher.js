// A caesarCipher function that takes a string 
// and a shift factor and returns it with each character “shifted”. 

export function caesarCipher(string, shiftFactor) {
  const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (alphabetLower.includes(char)) {
      result += shift(char, shiftFactor, alphabetLower);      
    }
    else if (alphabetUpper.includes(char)) {
      result += shift(char, shiftFactor, alphabetUpper);
    }
    else {
      result += char;
    }
  }
  
  return result;
}

function shift(char, shiftFactor, alphabet) {
  let currentPosition = alphabet.indexOf(char);
  let newPosition = (currentPosition + shiftFactor) % alphabet.length;
  return alphabet[newPosition];
}

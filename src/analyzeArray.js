// An analyzeArray function that takes an array of numbers 
// and returns an object with the following properties: 
// average, min, max, and length.

export function analyzeArray(array) {
  const length = array.length;

  const min = length > 0 ? Math.min(...array) : null;
  const max = length > 0 ? Math.max(...array) : null;

  const total = array.reduce((prev, curr) => prev + curr, 0);

  const obj = {
    'average': length > 0 ? total / length : 0,
    'min': min,
    'max': max,
    'length': length
  }

  return obj;
}
// A capitalize function that takes a string 
// and returns it with the first character capitalized.

export function capitalize(string) {
  const stringTrim = string.trim();
  return stringTrim.charAt(0).toUpperCase() + stringTrim.slice(1);
}

/*DESCRIPTION: 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i=0; i<string.length; i++) {
    const char = string[i].toLowerCase();
    if (characters.includes(char) && !result.includes(char)) {
      result += char;
    }
  }
  result = result.split('').sort().join('');
  return result === characters;
}
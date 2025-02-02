/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  let txt;

  if (typeof word === 'number') {
    txt = word + '';
  } else {
    txt = word.toLowerCase();
  }
  let box = new Set(txt);

  if (typeof word === 'string') {
    return alphabet.split('').every(char => box.has(char));
  } else if (typeof word === 'number') {
    return digits.split('').every(digit => box.has(digit));
  }

  return false;
};

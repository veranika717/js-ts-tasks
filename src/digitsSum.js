/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  const digits = Math.abs(n).toString().split('');
  let sum = 0;
  for (let i = 0; i < digits.length; i++){
    sum += Number(digits[i]);
  }

 
  return sum;
}

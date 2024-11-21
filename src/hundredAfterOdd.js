/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i + 1, 0, 100); //добавляет 100 сразу после каждого нечётного числа в массиве, не удаляя при этом существующие элементы
      i++;
    }
  }
  return arr;
};

/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let currentMaxSequence = 0;
  let maxSequencePosition = 0;
  for (i = 0; i < arr.length - 1; i++) {
    let localMaxSequence = 1;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        localMaxSequence += 1;
      } else {
        break;
      }
    }
    if (localMaxSequence > currentMaxSequence) {
      currentMaxSequence = localMaxSequence;
      maxSequencePosition = i;
    }
  }
  return arr.slice(maxSequencePosition, maxSequencePosition + currentMaxSequence);
};

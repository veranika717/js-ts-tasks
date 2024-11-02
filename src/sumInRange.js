/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  
  let sum = 0;
  if (end < start) { // 6 start 0 end
    for (let i = start; i >= end; i--) {
      sum += i;
    }
    return sum;
  }
  for (let i = +start; i <= end; i++) {
    sum += i;
}

return sum;
}


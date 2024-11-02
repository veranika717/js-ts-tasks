/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  const volume = 1/3 * h * Math.PI *(r ** 2);
  const volume2 = volume * 100;
  return Math.round(volume2) /100;
}

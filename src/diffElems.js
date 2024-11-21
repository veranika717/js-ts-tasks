/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
// let newarray = [];
// let diff = 0;
// for(let i = 0; i < arr. length; i++){
// if (Inewarray, includes (arr [il))
// newarray-push(arr [il);
// diff++;
// return diff;
  const elements = new Set(arr); 
   return elements.size;

 };

/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  let result = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promisesArray.length; i++) {
      promisesArray[i]
      .then(value => {
          result[i] = value;
          if (i == promisesArray.length - 1) {
            resolve(result);
          }
        })
        .catch(error => {
          reject(error);
        });
    }
  });
}

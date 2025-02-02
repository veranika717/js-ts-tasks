/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  if (typeof value === 'string') {
    value = parseFloat(value);
  }

  if (isNaN(value)) {
    throw new Error('not a number');
  }

  let result: number;

  if (from === 'm' && to === 'mi') {
    result = value / 1609.34;
  } else if (from === 'mi' && to === 'm') {
    result = value * 1609.34;
  } else if (from === 'gr' && to === 'pound') {
    result = value / 453.592;
  } else if (from === 'pound' && to === 'gr') {
    result = value * 453.592;
  } else if (from === 'pound' && to === 'gr') {
    result = value * 453.592;
  } else if (from === 'C' && to === 'K') {
    result = value + 273.15;
  } else if (from === 'K' && to === 'C') {
    result = value - 273.15;
  } else if (from === to) {
    result = value;
  } else {
    throw new Error('bad conversion type');
  }
  


  return Number(result.toFixed(2));
  };
  
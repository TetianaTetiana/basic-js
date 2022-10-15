const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = 0;
  for(let i = 0; i < matrix.length; i += 1){

     const element = matrix[i];
     for(let j = 0; j < element.length; j += 1){

       const elem = element[j];
       if(elem === '^^'){
        cats = cats + 1;
       }
     }
  }
  return cats;
}

module.exports = {
  countCats
};

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let heightOrderd = heights.slice().sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== heightOrderd[i]) {
      count++;
    }
  }
  return count;
};

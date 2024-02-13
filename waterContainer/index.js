/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let biggestSum = 1;
  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      sum = (height[i] - (height[i] - height[j])) * j;
      if (height[i] - height[j] > 0 && biggestSum <= sum) {
        biggestSum = (height[i] - (height[i] - height[j])) * j;
      }
    }
  }

  console.log("sums", biggestSum);
  return biggestSum;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    prod *= nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let localProd = 1;
      for (let j = 0; j < nums.length; j++) {
        if (j !== i) {
          localProd *= nums[j];
        }
      }
      result.push(localProd);
    } else {
      result.push(prod / nums[i]);
    }
  }

  return result;
};

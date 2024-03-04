/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const result = [];
  const temp = [];
  const numsHash = new Map();

  nums.forEach((num) => {
    const hashItem = numsHash.get(num);
    if (hashItem) {
      numsHash.set(num, hashItem + 1);
    } else {
      numsHash.set(num, 1);
    }
  });
  for (const [key, val] of numsHash) {
    temp.push({ key, val });
  }

  temp.sort((a, b) => {
    return b.val - a.val;
  });
  for (let i = 0; i < k; i++) {
    result.push(temp[i].key);
  }

  return result;
};
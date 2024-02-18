var searchInsert = function (nums, target) {
  const mid = nums[Math.floor(nums.length / 2)];
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  if (target > mid) {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] === target) {
        return i;
      } else if (target > nums[i]) {
        return i + 1;
      }
    }
  } else if (target < mid) {
    for (let i = mid; i >= 0; i--) {
      if (nums[i] === target) {
        return i;
      } else if (target > nums[i]) {
        return i + 1;
      }
    }
  } else {
    return Math.floor(nums.length / 2);
  }

  return 0;
};

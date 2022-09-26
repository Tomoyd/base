/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
  return [];
};

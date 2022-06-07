var twoSum = function (nums, target) {
  var lIndex = 1;
  for (var i = 0; i < nums.length; i++) {
    lIndex = nums.lastIndexOf(target - nums[i]);
    if (lIndex > -1) {
      return [i, lIndex];
    }
  }
};

const r = twoSum([1, 4, 2], 3);
console.log('r', r);

var twoSum2 = function (nums, target) {
  var lIndex = 1;
  var i = 0;
  while (nums.length) {
    lIndex = nums.indexOf(target - nums.shift());
    i++;
    if (lIndex > -1) {
      return [i - 1, i + lIndex];
    }
  }
};

var twoSum2 = function (nums, target) {
  var lIndex = 1;
  var i = 0;
  while (nums.length) {
    lIndex = nums.indexOf(target - nums.shift());
    i++;
    if (lIndex > -1) {
      return [i - 1, i + lIndex];
    }
  }
};

var twoSum3 = function (nums, target) {
  var numsMap = {};

  for (var i = 0; i < nums.length; i++) {
    if (numsMap[nums[i]] !== undefined) {
      if (target / 2 === nums[i]) {
        return [numsMap[nums[i]], i];
      }
      continue;
    }
    numsMap[nums[i]] = i;
  }

  for (var k in numsMap) {
    if (numsMap[target - +k] != undefined) {
      return [numsMap[k], numsMap[target - +k]];
    }
  }
};
let r2 = twoSum3([1, 2, 3, 3], 6);
console.log('r2', r2);
var twoSum4 = function (nums, target) {
  var numsMap = {};
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    if (numsMap[nums[i]] === true) {
      result = [numsMap[target - nums[i]], i];
      break;
    }
    numsMap[nums[i]] = i;
    numsMap[target - nums[i]] = true;
  }

  if (result[0] === true) {
    return [nums.indexOf(target / 2), result[1]];
  }
  return result;
};
let r4 = twoSum4([1, 2, 3, 3], 6);
console.log('r4', r4);

var twoSumL = function (nums, target) {
  var num1 = {},
    num2 = {};
  for (var i = 0; i < nums.length; i++) {
    if (num2[nums[i]] === true) {
      return [num1[target - nums[i]], i];
    }
    num1[nums[i]] = i;
    num2[target - nums[i]] = true;
  }
};

export {};

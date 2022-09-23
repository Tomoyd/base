var intersection = function (nums1, nums2) {
  const map = new Map();

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], true);
  }
  let flag = false;
  return nums2.filter((item) => {
    flag = map.get(item);
    map.set(item, false);
    return flag;
  });
};

const r = intersection([1, 2, 3, 3, 4, 7, 9], [1, 3, 4, 3, 9]);
console.log(r);

var isValid = function (str) {
  const stack = [];

  const map = new Map([
    ['[', ']'],
    ['{', '}'],
    ['(', ')'],
  ]);

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i])) {
      stack.push(str[i]);
      continue;
    }
    if (map.get(stack[stack.length - 1]) !== str[i]) {
      return false;
    }
    stack.pop();
  }

  return true;
};

const f = isValid('(((({}){})[]{})');
console.log(f);

var twoSum = function (arr = [], target) {
  const map = new Map();
  let temp;
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i];
    if (map.get(temp) || map.get(temp) === 0) {
      return [map.get(temp), i];
    }
    map.set(target - temp, i);
  }

  return [];
};

const indexs = twoSum([2, 7, 11, 15, 9], 9);
console.log(indexs);

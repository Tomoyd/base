var rotate = function (nums, k) {
  let temp;
  let len = nums.length;

  for (let i = 0; i < k; i++) {
    temp = nums[len - 1];
    for (let j = len - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = temp;
  }

  return nums;
};

var rotate = function (nums, k) {
  const len = nums.length;
  k = k % len;

  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};

var rotate = function (nums, k) {
  let len = nums.length;
  if (len <= 0) return;
  nums.reverse();
  k = k % len;
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);
};

function reverse(arr, begin, end) {
  for (let i = begin, j = end; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

console.time();
const r = rotate([1, 2, 3, 4, 5], 3);
console.log('r', r);
console.timeEnd();

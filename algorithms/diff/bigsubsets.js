/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length;
  if (n === 0) return 0;
  let res = 0;
  let arr = new Array(n).fill(1); // 初始化到某个目标的步数
  for (let i = 0; i < n; i++) {
    //nums[i] 为目标
    for (let j = 0; j < i; j++) {
      // j都是i之前的下标，他们都是去i的可能
      //  如果nums[j] <nums[i] 那边可以从nums[j]； 到nums[i] 到num[j]的步骤加1就是到i的步骤
      //  当前的路径步骤arr[i]与之前的对比取最大值; 即可
      if (nums[j] < nums[i]) {
        arr[i] = Math.max(arr[i], arr[j] + 1);
      }
    }
    //  到i当前的最大值与之前到i-1的最大值对比 取最大；
    res = Math.max(res, arr[i]);
  }

  let index = arr.lastIndexOf(res);
  let pre = nums[index];
  const result = [pre];
  for (let i = res - 1; i >= 1; i--) {
    // 每次从上一个找下一个时，必须从上一个index的前面找
    let j = index - 1;
    while (j >= 0) {
      if (arr[j] === i && nums[j] < pre) {
        index = j;
        pre = nums[j];
        break;
      }
      j--;
    }
    result.unshift(pre);
  }

  return res;
};

const r = lengthOfLIS([1, 2, 3, 9, 3, 6, 7, 3]);

/**
 * 每次找个中间值
 * 小的都放左边
 * 大的都放右边
 * 对比时，每找到一个比参考值小的就进行，小的位置加一，最后再进行，将小值中最小的一位与参考值置换
 * 一次递归，
 * 直到元素只有一个
 *
 *  pivot 不稳定  交换时会导致位置变化，考虑两个相同的元素，有一个比他们小的元素在他们后面，
 * 对比时前面的会被置换到后面 如0,2,2,1
 * 时间 nlgn n^2 pivot 都是最后一个会导致最坏情况
 * 空间 logn
 */

function quickSort2(arr, low = 0, higher = arr.length) {
  if (low >= higher) {
    return arr;
  }
  let partIndex = low;

  const pivot = arr[low];

  let temp;

  for (let i = low + 1; i < higher; i++) {
    // 每找到一个比pivot小的就需要
    // 将连续的新位置交换
    if (arr[i] < pivot) {
      partIndex += 1;
      temp = arr[partIndex];
      arr[partIndex] = arr[i];
      arr[i] = temp;
    }
  }

  if (low !== partIndex) {
    arr[low] = arr[partIndex];
    arr[partIndex] = pivot;
  }

  quickSort2(arr, low, partIndex);
  quickSort2(arr, partIndex + 1, higher);
  return arr;
}

console.log(quickSort2([2, 1, 3, 4, 6, 8, 9.0]));

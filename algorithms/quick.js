/**
 * 每次找个中间值
 * 小的都放左边
 * 大的都放右边
 * 一次递归，
 * 直到元素只有一个
 */

function quickSort(arr) {
  const length = arr.length;
  if (length === 1) {
    return arr;
  }

  let pivot = parseInt(arr.length / 2);
}

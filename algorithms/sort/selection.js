/**
 * 选择排序
 * 最好，最坏，平均n^2
 * 稳定：不稳定
 * 空间复杂度 1
 * 例如
 * 从未排序的数组中每次选择一个最小的，依次放到排好的数组
 */

function sort(arr = []) {
  const length = arr.length;
  let temp;
  let minIndex;
  for (let i = 0; i < length; i++) {
    minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
}
const testArr = [1, 4, 6, 89, 8, 0];
sort(testArr);
console.log(testArr);

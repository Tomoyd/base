/**
 * 选择排序
 * 最好，最坏，平均n^2
 * 稳定：不稳定
 * 空间复杂度 1
 * 例如
 * 从未排序的数组中每次选择一个最小的，依次放到排好的数组
 */

function selectSort(arr) {
  let minIndex = 0;
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  console.log('arr', arr);
}

/**
 * 不稳定
 * [1,2,2, 3,1]
 * 会导致两个2的位置发生变化
 */

selectSort([1, 2, 2, 3, 1]);

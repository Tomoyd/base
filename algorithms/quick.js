/**
 * 每次找个中间值
 * 小的都放左边
 * 大的都放右边
 * 一次递归，
 * 直到元素只有一个
 *
 *  pivot 不稳定
 * 时间 nlgn n^2 pivot 都是最后一个会导致最坏情况
 * 空间 n*logn
 */

function quickSort(arr) {
  const length = arr.length;

  if (length <= 1) {
    return arr;
  }

  const pivot = arr[length - 1];

  let left = [];
  let right = [];

  for (let i = 0, j = length - 2; i < j; i++, j--) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
    if (arr[j] < pivot) {
      left.push(arr[j]);
    } else {
      right.push(arr[j]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function sortByInPlace(arr, low, higher) {
  higher = higher === undefined ? arr.length : higher;
  low = low || 0;

  if (low >= higher) {
    return;
  }

  const pivot = arr[higher - 1];
  let partiIndex = low;
  let temp;

  for (let i = low; i < higher - 1; i++) {
    if (arr[i] < pivot) {
      temp = arr[i];
      arr[i] = arr[partiIndex];
      arr[partiIndex] = temp;
      partiIndex += 1;
    }
  }
  arr[higher - 1] = arr[partiIndex];
  arr[partiIndex] = pivot;

  sortByInPlace(arr, low, partiIndex);
  sortByInPlace(arr, partiIndex + 1, higher);

  return arr;
}

function quickSort2(arr, low = 0, higher = arr.length) {
  if (low >= higher) {
    return arr;
  }

  const pivot = arr[low];
  let partIndex = low;
  let temp;
  for (let i = low + 1; i < higher; i++) {
    if (arr[i] < pivot) {
      partIndex += 1;
      temp = arr[i];
      if (partIndex < i) {
        arr[i] = arr[partIndex];
        arr[partIndex] = temp;
      }
    }
  }

  if (partIndex > low) {
    arr[partIndex] = arr[low];
    arr[low] = temp;
  }

  quickSort2(arr, low, partIndex);
  quickSort2(arr, partIndex + 1, higher);
  return arr;
}

console.log(quickSort2([1, 2, 7, 6, 4, 9, 0]));

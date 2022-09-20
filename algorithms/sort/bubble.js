/**
 *
 * bubble sort
 *
 * 最好的时间复杂度 n
 * 平均 n^2
 * 最坏n^2
 * 空间复杂度 1
 * 稳定
 */
function bubble(arr) {
  const length = arr.length;
  let temp;
  for (let i = 0; i < length; i++) {
    for (let j = 1; j < length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

const testArr = [1, 7, 3];
console.log('bubble', bubble(testArr));

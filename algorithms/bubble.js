function bubble(arr) {
  let len = arr.length;
  let maxIndex = 0;
  let tempI = 0;
  let isSorted = true;
  for (let i = len - 1; i >= 0; i--) {
    isSorted = true;
    maxIndex = 0;

    for (let j = 1; j <= i; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      } else {
        isSorted = false;
      }
    }

    if (isSorted) {
      return arr;
    }

    if (i !== maxIndex) {
      tempI = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = tempI;
    }
  }
  return arr;
}

// const arr = [1, 7, 3];

// bubble(arr);

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

function average(arr = []) {
  let len = arr.length;
  let temp;
  let isSorted = true;
  for (let i = len - 1; i > 0; i--) {
    isSorted = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        isSorted = false;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (isSorted) {
      return arr;
    }
  }
  return arr;
}

average(arr);

console.log('arr', arr);

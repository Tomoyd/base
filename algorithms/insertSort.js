/**
 * 插入排序
 * 稳定排序
 */

/**
 * 认为已经有排好的顺序，从没排好的一个一个取过来
 * 插入到以及排好的顺序的列表中合适的位置
 * 最好 n
 * 最差 n^2
 * 平均 n^2
 * 空间 1
 */

function insertSort(arr) {
  let currentValue = 0;
  for (let i = 1; i < arr.length; i++) {
    currentValue = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (currentValue > arr[j]) {
        arr[j + 1] = currentValue;
        break;
      }
      arr[j + 1] = arr[j];
    }
  }
  console.log('arr', arr);
}

// insertSort([1, 2, 3, 6, 2, 5]);

function insert(arr = []) {
  let len = arr.length;
  let temp;
  let current;
  for (let i = 1; i < len; i++) {
    current = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[current] < arr[j]) {
        temp = arr[current];
        arr[current] = arr[j];
        arr[j] = temp;
        current = j;
      } else {
        break;
      }
    }
  }
}

let arr = [1, 2, 3, 6, 2, 5];
insert(arr);
console.log('arr', arr);

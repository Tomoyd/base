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

function insertSort(arr = []) {
  let length = arr.length;
  let temp;
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] <= arr[j]) {
        break;
      }
      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
}

const testArr = [1, 3, 5, 4, 8, 8, 0, 9];

insertSort(testArr);
console.log(testArr);

/**
 * 归并排序，
 * 时间复杂度 nlogn
 *  n*(1/2)*(1/2)*(1/2)*(1/2)...=1  2^x=lnN x=lnN
 * 每次执行平均按n 所以就是n*lnN
 * 稳定 稳定
 * 空间复杂度 n
 *
 * 进行分块
 * 分到每组只有两个元素，
 * 最小组比较后，在进行小组之间的比较
 * 比较完之后在进行合并
 * 直到合并完
 */

function merge(arr1, arr2) {
  const arr = [];

  while (arr1.length && arr2.length) {
    arr.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift());
  }
  if (arr1.length) {
    arr.push(...arr1);
  }
  if (arr2.length) {
    arr.push(...arr2);
  }
  return arr;
}

function mergeSort(arr) {
  const length = arr.length;

  if (length === 1) {
    return arr;
  }

  const divide = parseInt(length / 2);

  return merge(
    mergeSort(arr.slice(0, divide)),
    mergeSort(arr.slice(divide, length)),
  );
}

function merge1(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      arr.push(right.shift());
    } else {
      arr.push(left.shift());
    }
  }

  arr.push(...left, ...right);
  return arr;
}

function sort2(arr = []) {
  let len = arr.length;
  if (arr.length < 2) {
    return arr;
  }

  const partIndex = ~~(len / 2);
  return merge1(sort2(arr.slice(0, partIndex)), sort2(arr.slice(partIndex)));
}

console.log(sort2([1, 2, 0, 0, 4, 3, 2, 1, 7]));

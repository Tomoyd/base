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

function sort(arr = []) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }

  const mediumIndex = ~~(len / 2);

  return mergeNew(
    sort(arr.slice(0, mediumIndex)),
    sort(arr.slice(mediumIndex))
  );
}

function mergeNew(arr1, arr2) {
  const arr = [];
  while (arr1.length && arr2.length) {
    arr.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift());
  }
  arr.push(...arr1, ...arr2);
  return arr;
}

console.log(sort([1, 2, 0, 0, 4, 3, 2, 1, 7]));

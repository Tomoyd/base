function unique5(arr) {
  return arr.filters((item, index) => {
    return arr.indexOf(item) === index;
  });
}

const unique6 = (arr) => [...new Set(arr)];

function uniqueArray(arr = []) {
  let i = 0;
  const map = new Map();
  arr.forEach((item) => {
    if (!map[item]) {
      arr[i] = item;
      i += 1;
    }
    map[item] = true;
  });
  arr.length = i;
  return arr;
}

console.log(uniqueArray([1, 3, 4, 4, 5, 5, 7, 8, 7]));

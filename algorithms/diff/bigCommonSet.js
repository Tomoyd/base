const bigCommonSubsets = (oldArr, newArr) => {
  let i = 0;
  const map = new Map();
  let temp;
  while (oldArr[i] !== undefined) {
    temp = map.set(oldArr[i], i);
    i++;
  }

  i = 0;
  let preArr = [];
  let currentArr = [];

  for (let i = 0; i < newArr.length; i++) {
    currentArr = [];
    if (map.get(newArr[i] === undefined)) {
      continue;
    }
    currentArr.push(newArr[i]);
    for (let j = i + 1; j < newArr.length; j++) {
      if (map.get(newArr[j]) > map.get(currentArr[currentArr.length - 1])) {
        currentArr.push(newArr[j]);
      }
    }

    if (preArr.length < currentArr.length) {
      preArr = currentArr;
    }
  }

  return preArr;
};

const result = bigCommonSubsets([1, 2, 3, 4, 7, 8, 9, 10], [8, 9, 1, 2, 4, 5]);

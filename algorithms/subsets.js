const subsets = (uniqueArr, start = 0, len = 0, setLen = 0) => {
  if (len >= setLen && setLen > 0) {
    return [[]];
  }

  const result = [];
  if (!setLen) {
    result.push([[]]);
    for (let i = start; i < uniqueArr.length; i++) {
      for (let j = 1; j <= uniqueArr.length; j++) {
        subsets(uniqueArr, i + 1, len + 1, j).forEach((item) => {
          result.push([uniqueArr[i], ...item]);
        });
      }
    }
  } else {
    for (let i = start; i < uniqueArr.length; i++) {
      subsets(uniqueArr, i + 1, len + 1, setLen).forEach((item) => {
        result.push([uniqueArr[i], ...item]);
      });
    }
  }

  return result;
};

console.log(subsets([1, 2, 3]));

const subsetsII = (arr = [], start = 0, currLen = 0, len = 0) => {
  if (currLen >= len && len !== 0) {
    return [[]];
  }
  const result = [];
  const uniqueMap = new Map();
  if (len === 0) {
    result.push([]);
    for (let i = start; i < arr.length; i++) {
      if (uniqueMap[arr[i]]) {
        continue;
      }
      for (let j = 1; j <= arr.length; j++) {
        subsetsII(arr, i + 1, currLen + 1, j).forEach((item) => {
          result.push([arr[i], ...item]);
        });
      }
      uniqueMap[arr[i]] = true;
    }
  } else {
    for (let i = start; i < arr.length; i++) {
      if (uniqueMap[arr[i]]) {
        continue;
      }
      subsetsII(arr, i + 1, currLen + 1, len).forEach((item) => {
        result.push([arr[i], ...item]);
      });

      uniqueMap[arr[i]] = true;
    }
  }

  return result;
};

console.log(subsetsII([1, 2, 2]));

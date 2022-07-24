// @ts-nocheck
const combineSum = (candidate, target, start = 0) => {
  if (target === 0) {
    return [[]];
  }
  if (target < 0) {
    return [[-1]];
  }
  const result = [];
  for (let i = start; i < candidate.length; i++) {
    combineSum(candidate, target - candidate[i], i)
      .filter((item) => !item.includes(-1))
      .forEach((item) => {
        result.push([candidate[i], ...item]);
      });
  }
  return result;
};

// console.log(combineSum([5, 7], 6));

const predum = (str) => {
  if (str.length <= 1) {
    return [str];
  }
  const result = [];
  for (let s of str) {
    const nextStr = str
      .split('')
      .filter((ss) => ss !== s)
      .join('');

    predum(nextStr).forEach((item) => {
      result.push(s + item);
    });
  }

  return result;
};
/*
递归对未来的数据应用
需要对不匹配的进行过滤
递归的结束的判断
 */

const combineSum2 = (candidate = [], target, start = 0, isSorted) => {
  if (!isSorted) {
    candidate.sort((a, b) => a - b);
  }

  if (target === 0) {
    return [[]];
  }
  if (target < 0) {
    return [[-1]];
  }

  const result = [];
  const map = new Map();
  for (let i = start; i < candidate.length; i++) {
    if (map[candidate[i]]) {
      continue;
    }
    const nextArr = combineSum2(candidate, target - candidate[i], i + 1, true);

    if (nextArr.length === 1 && nextArr[0][0] === -1) {
      continue;
    }
    nextArr.forEach((item) => {
      result.push([candidate[i], ...item]);
    });
    map[candidate[i]] = true;
  }

  return result;
};

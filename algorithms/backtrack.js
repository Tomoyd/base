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

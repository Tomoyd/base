// @ts-nocheck

/**
 * 找组合合并，需要用到回溯法
 * 回溯法的关键是，渐进式，知道子集的情况，再添加相应的元素逐步回溯扩展
 * 递归方式实现
 */
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

/*

[2] [7]  [3]
  取值时只能从该值往后取 [index, candidates.length)
  不可以后面的再往前取值
*/
var combinationSum = function (candidates, target) {
  const backtrace = (target, start = 0) => {
    if (target === 0) {
      return [[]];
    }
    if (target < 0) {
      return [];
    }

    const result = [];

    for (let i = start; i < candidates.length; i++) {
      const newTarget = target - candidates[i];
      if (newTarget < 0) {
        continue;
      }
      backtrace(newTarget, i).forEach((item) => {
        result.push([candidates[i], ...item]);
      });
    }
    return result;
  };

  return backtrace(target);
};

var combinationSum = function (candidates, target) {
  const res = [];
  const dfs = (t, selected = [], i = 0) => {
    if (i >= candidates.length) return;
    if (t === 0) {
      res.push(selected);
      return;
    }
    if (t < 0) {
      return;
    }

    if (t - candidates[i] >= 0) {
      dfs(t - candidates[i], [...selected, candidates[i]], i);
    }

    dfs(t, selected, i + 1);
  };
  dfs(target, [], 0);
  return res;
};

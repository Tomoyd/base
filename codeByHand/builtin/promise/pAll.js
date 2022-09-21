/**
 * 如果都filled，则返回状态未Fulfilled的Promise
 * 如果有一个是reject 则返回reject
 *
 * 1. 返回一个Promise
 * 2. 对PList中的进行Promise.resolve 以便统一进行then调用
 * 3. 对结果记录，经结果按照index顺序存储到数组中返回
 *
 */

Promise.all = (pList) => {
  return new Promise((resolve, reject) => {
    let result = [];
    let index = 0;
    pList.forEach((p, i) => {
      Promise.resolve(p).then(
        (val) => {
          result[i] = val;
          index++;
          if (index === pList.length) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};

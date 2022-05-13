/**
 * 如果都filled，则返回状态未Fulfilled的Promise
 * 如果有一个是reject 则返回reject
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
        },
      );
    });
  });
};

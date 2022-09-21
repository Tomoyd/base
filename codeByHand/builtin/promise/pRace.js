/**
 * 由第一个过渡到非Pending,转为fulfilled或者rejected的实例决定，返回一个包装的新的实例

 */

Promise.race = function (pList) {
  return new Promise((resolve, reject) => {
    pList.forEach((p) => {
      Promise.resolve(p).then(
        (val) => {
          resolve(val);
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};

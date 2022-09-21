/**
 *
 * 返回一个fulfilled的Promise，不管是正确或者错误都返回
 * 正确的onFull时记录
 * {
 *    status:"fulfilled",
 *    value
 * }
 *
 *
 * onRejected时
 *  {
 *    status:"rejected",
 *    reason
 * }
 */

Promise.allSettled = function (pList) {
  let result = [],
    index = 0;

  const f = (resolve) => {
    index++;
    if (index === pList.length) {
      resolve(result);
    }
  };
  return new Promise((resolve) => {
    pList.forEach((p, i) => {
      Promise.resolve(p).then(
        (val) => {
          result[i] = {
            status: 'fulfilled',
            value: val,
          };
          f(resolve);
        },
        (error) => {
          result[i] = {
            status: 'rejected',
            reason: error,
          };
          f(resolve);
        }
      );
    });
  });
};

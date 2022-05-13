/**
 *
 * 返回一个fulfilled的Promise，不管是正确或者错误都返回
 */

Promise.allSettled = function (pList) {
  let result = [],
    index = 0;

  const f = (resolve) => {
    index++;
    if (index === pList) {
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
        },
      );
    });
  });
};

/**
 * 所有的都是reject时才会返回reject，只要有一个fulFilled，则返回Fulfilled
 */

Promise.any = function (pList) {
  let index = 0;
  return new Promise((resolve, reject) => {
    pList.forEach((p) => {
      Promise.resolve(p).then(
        (val) => {
          resolve(val);
        },
        () => {
          index++;
          if (index === pList.length) {
            reject(new Error('all rejected'));
          }
        }
      );
    });
  });
};

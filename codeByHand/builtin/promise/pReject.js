/**
 * 不管传入的值的类型，返回的都是一个新的Promise 并进行reject(reason)
 */

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => reject(reason));
};

/**
 * Promise.resolve(value)
 * 返回一个Promise，如果value是promise直接返回，如果不是则新建一个promise并执行resolve(value)
 */

Promise.resolve = (val) => {
  if (val instanceof Promise) {
    return val;
  }
  return new Promise((resolve) => {
    resolve(val);
  });
};

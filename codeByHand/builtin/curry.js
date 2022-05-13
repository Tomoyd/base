/**
 * 函数柯里化，将多个参数的函数，改造成多个一个入参数函数的形式
 */

function curry(fn) {
  function judge(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...arg) => {
      return judge(...args, ...arg);
    };
  }

  return judge;
}

/**
 * 偏函数，预置一些参数，剩余的再传参
 */

function partial(fn, ...args) {
  return (...arg) => {
    return fn(...args, ...arg);
  };
}

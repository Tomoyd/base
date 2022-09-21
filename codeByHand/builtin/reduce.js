// 首先需要处理pre参数，有init和无init参数时处理

// 处理参数时需要对空数据项进行排除
Array.prototype.reduce = function (cb, init) {
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof cb !== 'function') {
    throw new TypeError(cb + ' is not a function');
  }
  const o = Object(this);
  let k = 0;
  let pre;
  if (arguments.length > 1) {
    pre = init;
  } else {
    while (k < o.length && !(k in o)) {
      k++;
    }
    if (k >= length) {
      throw Error();
    }
    pre = o[k++];
  }

  while (k < o.length) {
    if (k in o) {
      pre = cb(pre, o[k], k, o);
    }
    k++;
  }

  return pre;
};

// @ts-ignore
const result = [, , , 1, 2, 4, 6].reduce((pre, curr) => pre + curr);
console.log('result', result);
const a = [, , , 1, 2, 3];

console.log('0 in a');

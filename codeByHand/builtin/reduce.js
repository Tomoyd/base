Array.prototype.reduce = function (cb, init) {
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof cb !== 'function') {
    throw new TypeError(cb + ' is not a function');
  }
  const o = Object(this);
  let pre;
  if (arguments.length > 1) {
    pre = init;
  } else {
    while (k < o.length && !(k in O)) {
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

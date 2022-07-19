/*
bind 是返回一个函数，因此可能会被用作构造函数
bind 可以预置一些参数
当构造函数时不能够丢失原来函数的原型，需要进行寄生原型关联，利用一个内部的空函数进行指定
 
 */
Function.prototype.bind = function (context) {
  context = context || window;
  const params = Array.prototype.slice.call(arguments, 1);
  const fn = this;
  const fNOP = function () {};

  const fBound = function () {
    const other = Array.prototype.slice.call(arguments);
    return fn.apply(
      this instanceof fNOP ? this : context,
      params.concat(other)
    );
  };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
};

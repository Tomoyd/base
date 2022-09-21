/*
bind 是返回一个函数，因此可能会被用作构造函数
bind 可以预置一些参数
当构造函数时不能够丢失原来函数的原型，需要进行寄生原型关联，利用一个内部的空函数进行指定
bind 返回一个新的 函数，这个函数可能会作为构造函数使用

1. bind预先传输的入参处理
2. 原型关联，返回的函数要与原函数，进行原型管理，通常使用一个空函数进行管理
3. 返回函数中判断是否进行了new 调用，如果是new调用，则使用返回函数的this作为上下文传入，否则应传入context
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

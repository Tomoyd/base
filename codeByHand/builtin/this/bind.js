Function.prototype.bind = function (context) {
  context = context || window;
  const params = Array.prototype.slice.call(arguments, 1);
  const fn = this;
  const fNOP = function () {};

  const fBound = function () {
    const other = Array.prototype.slice.call(arguments);
    return fn.apply(
      this instanceof fNOP ? this : context,
      params.concat(other),
    );
  };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
};

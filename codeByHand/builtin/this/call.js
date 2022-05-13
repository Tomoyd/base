Function.prototype.call = function (context, ...rest) {
  context = context || window;
  context.__fn__ = this;

  const result = context.__fn__(...rest);
  delete context.__fn__;
  return result;
};

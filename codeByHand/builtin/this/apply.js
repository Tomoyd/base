Function.prototype.apply = function (context, args) {
  context = context || window;
  context.__fn__ = this;
  let result;
  if (!args) {
    result = context.fn();
  } else {
    const params = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      params.push('args[' + i + ']');
    }

    result = eval('params.fn(params+"")');
  }
  delete context.__fn__;
  return result;
};

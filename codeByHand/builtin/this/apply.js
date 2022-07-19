Function.prototype.apply = function (context, args) {
  context = context || window;
  context.__fn__ = this;
  let result;
  if (!args) {
    result = context.fn();
  } else {
    var paramStr = '';
    for (var i = 0, len = arr.length; i < len; i++) {
      paramStr += 'args[' + i + ']';
    }

    result = eval('params.fn(' + paramStr + ')');
  }
  delete context.__fn__;
  return result;
};

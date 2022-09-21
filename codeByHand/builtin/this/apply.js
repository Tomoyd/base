/**
 * 是原型方法，apply中的 this指向函数
 *
 * 1. function this上下文指定 有效的context或者是 window
 *
 */
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

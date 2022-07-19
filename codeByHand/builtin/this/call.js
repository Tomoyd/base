// @ts-nocheck

/**
this 是fn
1. 执行时参数的拼接
2. this 绑定通过 属性调用方法
将属性删除
 */
Function.prototype.myCall = function (context, ...rest) {
  context = context || window;
  context.__fn__ = this;
  var params = '';
  for (var i = 1; i < arguments.length; i++) {
    params += 'arguments[' + i + '],';
  }

  const result = eval('context.__fn__(' + params + ')');
  delete context.__fn__;
  return result;
};

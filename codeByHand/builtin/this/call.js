// @ts-nocheck

/**
 
原型方法中的this 执行是fn调用者
2. this 绑定通过 属性调用方法
3. 上下文参数处理，obj或者window，将函数绑定到上下文的__fn__的属性上进行处理
4. 判断是否有参数，计算返回值
将属性删除
 */
Function.prototype.myCall = function (context) {
  context = context || window;
  context.__fn__ = this;
  var params = '';

  for (var i = 1; i < arguments.length; i++) {
    params += 'arguments[' + i + '],';
  }

  const result = !params
    ? context.fn()
    : eval('context.__fn__(' + params + ')');
  delete context.__fn__;
  return result;
};

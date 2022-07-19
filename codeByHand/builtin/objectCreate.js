/*
objectCreate 方法实现
1. 利用一个空函数进行原型连接
2. 将空函数创建的对象实例返回
需要处理实例元属性特性
 */

function create(proto, propertyObject) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null.');
  }

  function fNOP() {}
  fNOP.prototype = proto;

  const obj = new fNOP();

  if (propertyObject) {
    Object.defineProperties(obj, propertyObject);
  }

  if (!proto) {
    obj.__proto__ = null;
  }

  return obj;
}

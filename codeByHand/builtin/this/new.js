/*
1. 创建新对象
2. 进行与构造函数prototype原型关联
3. 进行this绑定，往this上添加属性
4. 如果返回值不为对象，返回新对象，否则返回该返回值
*/
function newThis(Constructor) {
  const newObj = {};
  newObj.__proto__ = Constructor.prototype;
  const res = Constructor.apply(
    newObj,
    Array.prototype.slice.call(arguments, 1)
  );

  return typeof res === 'object' ? res : newObj;
}

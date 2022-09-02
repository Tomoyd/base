/*
 * ES6 提供了一个元属性 new.target
 * 可以用来检测一个函数或者构造器是否被new操作符调用
 * 在所有函数中 new.target 都是可以访问的
 * 箭头函数中，new.target 属于它所在的词法作用域
 *
 * 如果没有被new调用 new.target 返回undefined
 */

function Person(name) {
  if (!new.target) {
    throw 'must use new';
  }
  console.log('new.target', new.target === Person, new.target.name); //new.target true Person
  this.name = name;
}

const person1 = new Person('hello');

export {};

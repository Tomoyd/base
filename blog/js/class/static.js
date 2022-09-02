/*
    静态方法：与类绑定，不是与类的实例绑定
    静态方法通常去定义一些工具帮助方法或者效能实用方法
 */

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

// 静态方法
Person.createAnonymous = function (gender) {
  const name = gender === 'male' ? 'John' : 'Rose';
  return new Person(name);
};

class Person2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  static count = 1;
  static createAnonymous(gender) {
    Person2.count++;
    const name = gender === 'male' ? 'John' : 'Rose';
    return new Person2(name);
  }
}

//  静态方法直接通过类，也就是构造函数可以调用

// class.staticMethod

// this.constructor.staticMethod

// 静态方法中访问静态属性只能通过 className.staticProperty方式
// 构造函数中可以使用 this.constructor.staticProperty className.staticProperty

export {};

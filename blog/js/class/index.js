// ES6 引入的class

// ES6之前 通过构造函数和原型模式 模仿类
/*
 1. 首先创建Person构造函数，有一个属性name
    getName 是原型上的，所有的Person实例都可以访问，共享的
 2. 通过new 创建实例 john，这个实例是Person和Object的实例 通过原型继承
 */

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const john = new Person('John Doe');

console.log('john.getName()', john.getName());
console.log('john', Object.keys(john));
/*
 class 新语法 只是原型继承方式的语法糖，没有其他附加增强功能
 typeof Person1  function
 1.class语法没有提升，必须在class声明后才能使用
 2.class语法内部代码按照严格模式方式执行
 3.class方法是不能够枚举的，因为会挂到原型上
 4.必须通过new方式调用，否则报TypeError
 new 操作时会自动调用 Person1 的constructor
 */

class Person1 {
  constructor(name) {
    this.name = name;
    this.sayHello = function () {
      console.log('hello');
    };
  }
  getName() {
    return this.name;
  }
}

const john1 = new Person1('John1');
console.log(john1.getName(), Object.keys(john1));

export {};

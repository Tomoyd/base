const Person = class {
  constructor(name) {
    this.name = name;
  }
};

/*
 class 本质上就是一个函数所有也能像函数一样，类似函数，当做变量传递， 
 也是一等公民，可以将一个class传递给一个函数，也可以作为返回值，也可以将其赋值给其他变量
 
 也有表达式方式进行声明 
 class 表达式可以是命名的也可以是不命名的
 表达式方式可以用来创建单例一个对象
 */

let person = (function (aClass) {
  const p1 = new aClass('hello');
  return { p1, aClass };
})(Person);

//  单例模式 应用中只有一个实例

const app = new (class {
  constructor(name) {
    this.name = name;
  }
  setup() {
    console.log('setup');
  }
})('hello');
app.setup();

export {};

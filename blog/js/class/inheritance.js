// ES5 继承方式

function Animal1(name) {
  this.name = name;
}
Animal1.prototype.walk = function () {
  console.log('walk');
};
function Dog(name) {
  Animal1.call(this, name);
}

Dog.prototype = Object.create(Animal1.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log('barking');
};

Dog.prototype.walk = function () {
  Animal1.prototype.walk.call(this);
  console.log(' dog bark');
};
const dog01 = new Dog('小花');
dog01.bark();
dog01.walk();
console.log('Dog.constructor', Dog.prototype.constructor === Dog);
// export {};

class Animal2 {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log('walk');
  }

  static sayName() {
    console.log('this', this); // 可以被子类继承使用，且this指向调用它的类
    console.log('names');
  }
}

class Dog2 extends Animal2 {
  // 如果有构造函数必须要进行 super调用
  constructor(name) {
    super(name); //必须的 这里的super代表的是父constructor 可以进行调用父类构造函数进行初始化
    this.age = 18;
  }

  walk() {
    super.walk(); // 不是必须的，如果需要的话可以调用父类的方法，Animal 原型方法  super代表父原型
    console.log(this.name, 'dog, walk');
  }
  bark() {
    console.log('bark');
  }
}

const dog02 = new Dog2('Dog2');

dog02.walk();
console.log(Dog2.prototype.constructor === Dog2);
// 继承使用
Dog2.sayName();

const owns = Object.getOwnPropertyNames(Dog2);
const ownsAnimal = Object.getOwnPropertyNames(Animal2);
console.log(owns, ownsAnimal);

//  继承一些原生的类

/*

es6 class 通过extends 实现继承
1. 父类 子类
2. 子类有构造函数，必须通过super调用父类的构造函数进行初始化
3. 可以在子类的方法中，用super调用父类的方法
*/

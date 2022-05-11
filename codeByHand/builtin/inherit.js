// 继承

// 原型链继承
// function Animal() {
//   this.colors = ['black', 'white'];
// }

// Animal.prototype.getColors = function () {
//   return this.colors;
// };

// function Dog() {}
// Dog.prototype = new Animal();

// const dogBrown = new Dog();
// dogBrown.colors.push('brown');

// const dog2 = new Dog();

// console.log('dog2.colors', dog2.colors); //dog2.colors [ 'black', 'white', 'brown' ]

// 构造函数
// function Animal(name) {
//   this.name = name;
// }

// function Dog(name) {
//   // 初始化实例的colors
//   Animal.call(this, name);
// }
// Dog.prototype = new Animal();

// const dog1 = new Dog('black');

// const dog2 = new Dog('white');

// console.log('dog2.name', dog2.name); //dog2.name 'white'

/**
 * 组合继承，既有共享的又有各自实例的
 * 可以共用，又互不影响
 */

// function Animal(name) {
//   this.name = name;
//   this.colors = ['black', 'white'];
// }

// Animal.prototype.getColors = function () {
//   return this.colors;
// };

// function Dog(name) {
//   Animal.call(this, name);
// }
// Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog;
// const dog1 = new Dog('white');
// dog1.colors.push('white');
// const dog2 = new Dog('black');
// console.log(dog2.name, dog2.colors); //black [ 'black', 'white' ]

/**
 * 寄生方式
 * 将组合方式是通过实例原型构造函数进行原型链接的，可以使用空函数进行原型连接，避免过重的初始化
 */

function Animal(name) {
  this.name = name;
  this.colors = ['black', 'white'];
}

Animal.prototype.getColors = function () {
  return this.colors;
};

function Dog(name) {
  Animal.call(this, name);
}

function F() {}
F.prototype = Animal.prototype;

Dog.prototype = new F();
Dog.prototype.constructor = Dog;

const dog1 = new Dog('white');
dog1.colors.push('white');
const dog2 = new Dog('black');
console.log(dog2.name, dog2.colors); //black [ 'black', 'white' ]

class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

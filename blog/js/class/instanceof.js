// obj instanceof constructor检测 构造函数的prototype 是否在对象的原型链上
class Animal11 {
  constructor(name) {}
}

class Cat01 extends Animal11 {}

class Cat02 extends Animal11 {}
const cat01 = new Cat01();
console.log(
  cat01 instanceof Cat01, // true Cat01.prototype 在 cat01 的原型链上
  cat01 instanceof Cat02, // false Cat02.prototype 不在 cat01 的原型链上
  cat01 instanceof Animal11 // true Animal11.prototype 在 cat01 的原型链上
);

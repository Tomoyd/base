// ES6 后支持中括号[表达式]方式进行 作为对象属性名
let nameP = 'p';
const obj = {
  a: 1,
  [nameP]: 12343,
};

console.log('name.p', obj.p);

const pName = 'full';
class Person2 {
  constructor(name) {}

  get [pName]() {
    return 'fullName';
  }
}

const p2 = new Person2();

console.log('p2', p2.full);

export {};

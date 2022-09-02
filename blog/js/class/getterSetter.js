class Person {
  constructor(name) {
    this.name = name;
  }
}

const person = new Person('Xi');
console.log(person.name);

// 如果不想name被直接的访问
class Person1 {
  constructor(name) {
    this.setName(name);
  }
  getName() {
    return this.name;
  }
  setName(name) {
    name = name.trim();
    if (name === '') {
      throw 'The name cannot be empty';
    }
    this.name = name;
  }
}

const person1 = new Person1('John1');
console.log(person);
person1.setName('new Name');
console.log('>>>', person1.name);
/*
与对象object 定义getter setter类似
自定义了getter set时将不起作用
*/
class Person2 {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    newName = newName.trim();
    if (newName === '') {
      throw 'the name cannot be empty';
    }
    this._name = newName;
  }
}

const p2 = new Person2('John2');

console.log('p2.name', p2.name);
console.log('p2', p2);
/*
 定义如下
 */
const obj = {
  _name: '',
  set name(newName) {
    this._name = newName;
  },
  get name() {
    return this._name;
  },
};

export {};

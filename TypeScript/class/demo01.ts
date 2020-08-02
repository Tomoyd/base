class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'hello,' + this.greeting;
  }
}

let greet = new Greeter('hu');

/**
 * 继承
 *
 */

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distance: number = 0) {
    console.log(`the ${this.name} moved ${distance}m`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark() {
    console.log('汪汪汪：！！！');
  }

  move(distance = 3) {
    super.move(distance);
    console.log('this.dog', this.name);
  }
}

const dog = new Dog('dog');

const dog2: Animal = new Dog('dog2');
dog.bark();
dog.move(10);
dog.bark();
dog2.move();

class Octopus {
  readonly number1: number;
  constructor(num1: number) {
    this.number1 = num1;
  }
}

/**
 * 参数属性
 */

class ParameterProperties {
  private keyName: string;
  constructor(readonly name: string) {
    this.keyName = name;
  }
}

new ParameterProperties('');

class Accessor {
  _name: string = '';

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}

const accessor = new Accessor();

console.log(accessor.name);

abstract class Department {
  abstract sayName(): void;
}

class AccountDepartment extends Department {
  sayName() {
    console.log('account');
  }
}

class Point {
  x: number = 0;
  y: number = 0;
}

interface Point3 extends Point {
  z: number;
}

let p3: Point3 = { x: 1, y: 2, z: 3 };

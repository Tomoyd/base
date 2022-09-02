/**
 * ES2022
 *私有字段只能在本类中访问，在其他子类或外部无法访问
 *在静态方法中私有字段可以直接访问
 *在其他方法中通过 this.# 方式访问
 *私有字段虽然在实例中无法范围，但仍然可以通过 in 在静态方法中检测到

 * 静态私有变量 静态私有方法
 */
class Person {
  #age;
  constructor(name) {
    this.name = name;
    this.#age = 18;
    this.#sayHello();
  }

  static #ee = 123;
  static sayAge(person) {
    console.log(Person.#ee);
    return #age in person;
  }
  #sayHello() {
    console.log('hello %d', this.name);
  }
}

const person = new Person('小明');
console.log(person, Person.sayAge(person));

let aPerson = {
  '#age': '1234',
};
Object.defineProperty(aPerson, '#age', {
  value: undefined,
});
console.log(aPerson['#age'], '#age' in aPerson);

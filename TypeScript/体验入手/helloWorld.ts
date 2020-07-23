// tsc hello World
// 类型注解
const printhelloWorld = (person: string) => {
  console.log(person);
};
printhelloWorld('小明');

/**
 * 如果数据类型结构是兼容的，那么两种数据类型是可以合并的
 */

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `hello、${person.firstName} ${person.lastName}`;
}

const user = { firstName: 'Jane', lastName: 'user', age: 16 };

console.log(greeter(user));

class Student {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + ' ' + lastName;
  }
}

greeter(new Student('Jace', 'ss'));

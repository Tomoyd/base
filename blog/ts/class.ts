// 一个空类
class Point {
  x: number;
  y: number;
  z = 0;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;
export {};
// 初始化 只会判断在构造函数中是否进行初始化，不会进一步判断是否在某个函数中进行初始化
// 如果执意要在方法中进行初始化可以使用!

class BadGreeter {
  name!: string;

  setName() {
    this.name = '';
  }
  constructor() {
    this.setName();
  }
}

// readonly修饰符,阻止在构造函数以外的地方进行赋值操作

class Greeter {
  readonly name: string = 'world';
  constructor(otherName: string) {
    this.name = otherName;
  }

  errorSet<M>() {}
}

// class 构造函数不能有类型参数（泛型），且返回值总是this

class Animal {
  //   constructor<string>() {} //Type parameters cannot appear on a constructor declaration
}

// Super 调用, 在调用任何this.成员之前，先在构造函数中调用super

// 方法

let x = '';

class P {
  x: string;
  m() {
    // x = 1;
  }
}

// get set
class D {
  [p: string]: boolean | number | string;
  _length = 0;
  get length(): number {
    return this._length;
  }

  set length(value: string | number) {
    this._length = Number(value);
  }
}

// 类继承 implement  只会检测是否实现了该方法，
// 不会实际的去检测方法的类型,会将参数类型置为any
interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s) {
    // Parameter 's' implicitly has an 'any' type.
    // Notice no error here
    return s.toLowercse() === 'ok';
    // any
  }
}

// extends  可以重写方法，继承方法

// 初始化顺序是 先基类再派生类，先字段，再构造函数

// 成员可见性

/**
 * 1. 默认public
 * 2. protected  子可见
 * 3. private   仅自己内部可见 还是能通过[] 访问的 和JavaScript中 #强私有不一样
 *
 */

/**
 *  静态成员
 *
 *  通过类本身访问，其实就是类上的一个属性，同样可以使用修饰符
 *  静态成员也可以被继承
 *  特殊的静态名称 name,length call 等不能被定义static成员，因为这些覆写Function原型上的数学
 *  没有静态类
 *
 *  静态块
 */

/**
 * 泛型类
 */

/**
 * this
 * 为了防止上下文丢失可以使用箭头函数，让this与词法作用域绑定，每个实例都会拷贝这个函数
 *
 *
 */

/**
 * this 参数，保证了运行时上下文的检测，编译时会被排除，使用时不要传
 */
class MyClass {
  name = 'MyClass';
  getName(this: MyClass) {
    return this.name;
  }
}
const c = new MyClass();
// OK
c.getName();

// Error, would crash
const g = c.getName;
// console.log(g());

/**
 * this 类型与运行时有关，this根据实际的运行情况指向该实例类型
 */

class Box {
  content: string = '';
  sameAs(other: this) {
    return other.content === this.content;
  }
}

class DerivedBox extends Box {
  otherContent: string = '?';
}

const base = new Box();
const derived = new DerivedBox();
// derived.sameAs(base);
// Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'.

/**
 * 基于this的保护类型 可以使用 this is Type 进行类型收窄
 */
// class FileSystemObject {
//   isFile(): this is FileRep {
//     return this instanceof FileRep;
//   }
//   isDirectory(): this is Directory {
//     return this instanceof Directory;
//   }
//   isNetworked(): this is Networked & this {
//     return this.networked;
//   }
//   constructor(public path: string, private networked: boolean) {}
// }

// 抽象

//类之间的关系，只要对方完全由另一个的字段，就可以赋值

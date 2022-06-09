import { type } from 'os';

let a: object = { name: '' };

// 定义

// 匿名的方式

const girl: { name: string; age: number } = { name: '小小', age: 18 };

// 接口方式

interface Girl {
  name: string;
  age: number;
}

// 别名方式

type Girl1 = {
  name: string;
  age: number;
};

// 修饰符 可选修饰符? 只读修饰符only

interface SportsOption {
  name: string;
  time?: string;
  readonly cost: number;
}

let football: SportsOption = { name: '', cost: 123, time: '今天' };

// 索引签名，不知道一个类型的属性名字时,索引签名必须是string或者number
// 由于数字类型的索引签名JavaScript 会把数字自动转化为字符串，
// 因此数字索引签名和字符串索引签名同时存在时，必须是string索引签名的子类型

interface Something {
  [index: string]: string;
  [x: number]: string;
}

// 会强制所有匹配索引签名的类型必须要是索引签名的子类型
interface SomethingWithName {
  [index: string]: string;
  [x: number]: string;
  name: string;
}

let something: SomethingWithName = { name: 'dog', s: '1', 1: '22' };

// 属性继承 extends

interface Animal {
  name: string;
}

interface Cat extends Animal {
  ears: number;
}

// 交叉类型 可以将已有的类型合并起来

interface Language {
  name: string;
}

interface Country {
  lat: string;
}

type MixLanguageCountry = Language & Country;

// 交叉类型，发生属性冲突时，将返回never，extends 重写冲突类型将会报错

/**
 * Interface 'Dog' incorrectly extends interface 'Animal'.
  Types of property 'name' are incompatible.
    Type 'number' is not assignable to type 'string'
 */
// interface Dog extends Animal {
//   name: number;
// }

type ConflictCat = { ears: number } & { ears: string };
//Type 'string' is not assignable to type 'never'.t
// const cC: ConflictCat = { ears: '' };

// 泛型对象

// 根据赋值给泛型的类型 返回具体的类型

type Fruit<T> = {
  name: T;
  something: string;
};

const apple: Fruit<'Apple'> = { name: 'Apple', something: 'eat' };

// Array 类型
// string[] 简写方式 相当于Array<string>

const strs: Array<string> = ['s1', 's2']; // Array 同时是一个构造函数

type c = ReadonlyArray<string>; // 简写 readonly Type[]
// Array 和ReadonlyArray 不能双向赋值

// 元组类型 明确知道数组有多少元素，且每个元素的类型 只对TS有影响 可以写可选元素 但是必须在后面

type NumberString = [string, number, string?];

//  ...number[],也可以使用剩余元素，但可选元素 不能和剩余元素一起  也可以加readonly 修饰
type NumberStrings = readonly [string, number, ...string[]];

// 或者使用as const 也可以将一个初始化的数据变成只读元组，一般实践中元组最好是只读的，只能初始化赋值

const numbers = [1, 2] as const;
const menus = ['navigator', 'abort'] as const;

export {};

// tuple 元组

let a: [string, string];
a = ['1', '1'];
a[0] = '2';
a[1] = '4';
console.log(a);

//枚举类型 标准数据类型的补充，命名友好方式的标识
/**
 * 默认情况下枚举编号从0开始，
 * 1.可以通过改变成员的值来更改它
 * 2. 可以从编号中取该值的名称
 */

enum Color {
  Red,
  Green,
  Blue,
}

let b: Color = Color.Blue;
let r: Color = Color.Red;
let rName: String = Color[0];
console.log(rName);

// any类型；用途1：比如可能包含各种类型的数组
// 在运行时可以是任何值所以编译时可以适应任何情况
let notSure: any = 4;
notSure = '你好我是一个字符串';
notSure = true;
notSure.toFixed();
notSure.includes('a');

//void 表示没有类型
// 用该类型声明 表示在运行时，什么都不是，比如不返回值的类型，
// 只能给该类型赋值为undfined或者null(--strickNullChecks)
// 故编译时不能调用任何方法

let unusable: void = undefined;
//unusable = null; //strickNullChecks没有是可以的

// null和undefined
// 默认情况下null和undefined是所有其他类型的子类型
// strick 模式下
// 1. undefined可以分配给自己，和any，void;
// 2. null可以分配给自己和any
//

// never类型：
/**
 * 声明为never类型，表示正常情况下不会发生的情况
 * 比如：
 * 1.抛出的异常函数
 * 2.永不返回的函数
 * 3.类型保护
 */

interface Man {
  type: 'man';
}
interface Woman {
  type: 'wuman';
}
type People = Man | Woman;
function check(person: People): void {
  switch (person.type) {
    case 'man':
      break;
    case 'wuman':
      break;
    default:
      const a: never = person;
      break;
  }
}

// 对象类型
let o: object;
o = {};
// o=9;
// o = null;
// o = undefined;

// 类型断言尖括号语法或者 as

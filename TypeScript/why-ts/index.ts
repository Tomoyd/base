let message = '111';

// Type 'number' is not assignable to type 'string'

message.toLocaleLowerCase();

type F = Function;

let a: F = function () {};

type FV = () => void;
type FV2 = {
  new (name: string, n: number): { name: string; n: number };
};

const cat = {
  name: '小花' as '小花',
};

/**
 * const cat: {
    name: "小花";
}
 */

const cat2 = { name: '小花' } as const;
let b: any;
const c1: unknown = b;

const a1: any = c1;

// 保证成员变量的安全性，即我们添加了新的成员，进行赋值会报错，强制程序员就行修正
// function sayCate(num: '1' | '2' | '3') {
//   switch (num) {
//     case '1':
//       break;
//     case '2':
//       break;
//     default:
//       const n: never = num;
//       return n;
//   }
// }

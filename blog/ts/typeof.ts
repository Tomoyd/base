// typeof只能对标识符变量进行操作或者标识符变量的属性
const a = { name: '' };

type One = typeof a;
// type One = {
//   name: string;
// };
enum Re {
  bun = 'string',
  c = '11',
  a = '44',
  cc = 1,
}

type ReType = typeof Re; //type ReType= { bun: Re.bun, c: Re.c, a: Re.a, cc: Re.cc }
const a112: ReType = { bun: Re.bun, c: Re.c, a: Re.a, cc: Re.cc };
export {};

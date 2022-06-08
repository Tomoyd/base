type ReturnTyeString = () => string;

interface ReturnInterFaceString {
  (): string;
}

declare const strFun: ReturnTyeString;

strFun();

interface Overloaded {
  (msg: string): string;
  (msg: number): number;
  sayName(): string;
}
interface SaySomething {
  (msg: string): number;
}

type Animal = {
  new (name: string): Animal;
};
function say(msg: number): string;
function say(msg: string, y: number): string;
function say(msg: string | number, y?: number) {
  if (typeof msg === 'string') {
    return msg + y;
  }
  if (typeof msg === 'number') {
    return '';
  }
  return msg;
}
say.sayName = () => {
  return '';
};

interface Foo {
  name: string;
}

// <> 进行断言 <Foo> 很可能会和JSX 搞混 不建议
const inter = <Foo>{};

interface Foo {
  // name: string;
  bar: string;
}
interface Bar {
  bar: string;
  name: string;
}
const bar: Bar = { bar: '', name: '' };
// const foo: Foo = bar as Foo;// error Bar 和FOO不能相互赋值给另一个类型

//
const foo: Foo = bar;

export {};

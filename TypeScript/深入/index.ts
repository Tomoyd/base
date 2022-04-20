/**
 * 流动的对象
 */

export namespace importing {
  export class Foo {}
}

import Bar = importing.Foo;

let bar: Bar;

let c: typeof bar;

// const 时typeof只能是123 其他错误
const name = '123';

const name2: typeof name = '123';

// 捕获健的名称 keyof 捕获类型的键

const colors = {
  red: 'r',
  blue: 'b',
};
//type Colors = "red" | "blue"
type Colors = keyof typeof colors;

let color: Colors = 'blue';

/**
 * 异常处理
 */

try {
  throw new Error('Something bad happening!');
} catch (error) {
  console.log(error);
}

// RangeError

try {
  throw new RangeError('kkkkk');
} catch (error: any) {
  console.log('error', error.message);
}

// ReferenceError

// SyntaxError

// TypeError

// URIError

/**
 * thisType
 */

let a = '1243';

a = null;
const b = Symbol('name');
console.log('b', b);

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number,
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum } as Type;
    // Type '{ length: number; }' is not assignable to type 'Type'.
    // '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
  }
}

function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const first = firstElement1([1, 2, 3]);
// b: any (bad)
const first2 = firstElement2([1, 2, 3]);

type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>;
// type Str = string

// Leaves the type alone.
type Num = Flatten<number>;
// type Num = number

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

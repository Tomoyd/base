const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];
type Persons = typeof MyArray;

export type Person = Persons[number];

// 作为索引的只能是类型，不能是变量引用,联合、keyof 或者其他类型

type key = 'age';
type Age = Person['age'];

// 条件类型 SomeType extends OtherType ? TrueType : FalseType;
// 条件约束
type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

// infer 关键字写一些有用的 类型帮助别名（helper type aliases）

// 联合类型进程分发时会，进行遍历，这是需要使用[]遍历
type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>;
// type StrArrOrNumArr = string[] | number[]
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr2 = ToArrayNonDist<string | number>;
// type StrArrOrNumArr = (string | number)[]

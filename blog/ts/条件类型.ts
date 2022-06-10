// 通过条件判断 得到 类型， 这个条件的关键字是 extends 通过extends 可以约束判断泛型变量，从而得到预期的类型

// 如

type M<T> = T extends { message: string } ? T['message'] : never;

// 使用 extends 后都可以使用infer 进行类型推断  infer

type ArrayItemType<T> = T extends (infer Item)[] ? Item : never;

// 分发条件类型，需要注意Union 分发功能 预期结果可能不一样

type Items<T> = T extends any ? T[] : never;

type StringOrNumberItems = Items<string | number>; //type StringNumberItems = string[] | number[]

// and
type AndItems<T> = [T] extends [any] ? T[] : never;
type StringAndNumberItems2 = AndItems<string | number>;

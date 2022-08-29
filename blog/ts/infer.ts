type ItemOfArr<T> = T extends (infer I)[] ? I : T;

type Cate2 = ItemOfArr<[string]>;

type Union<T> = T extends { name: infer U; age: infer U } ? U : T;
type AUnion = Union<{ name: string; age: number }>;

type Inter<T> = T extends {
  name: (n: infer U) => void;
  age: (a: infer U) => void;
}
  ? U
  : T;
type AInter = Inter<{ name: (s: string) => void; age: (a: number) => void }>;

type FirstIfString<T> = T extends [infer S, ...unknown[]]
  ? S extends string
    ? S
    : never
  : never;

// typescript v4.7 支持 infer type 后添加可选的extends 子句
// type FirstIfString2<T> = T extends [infer S extends string, ...unknown[]]
//   ? S
//   : never;

// infer 只能用在条件判断extends的子句，用来声明变量标识捕获到的类型，
// 捕获到的类型变量只能在true分支情况使用

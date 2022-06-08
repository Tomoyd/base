type Cate<T> = T extends infer R ? R : '';

type Cate2 = Cate<[string]>;

type FirstIfString<T> = T extends [infer S, ...unknown[]]
  ? S extends string
    ? S
    : never
  : never;

// typescript v4.7 支持 infer type 后添加可选的extends 子句
// type FirstIfString2<T> = T extends [infer S extends string, ...unknown[]]
//   ? S
//   : never;

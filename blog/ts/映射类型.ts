// 映射类型： 运用索引签名，条件判断 由传入的泛型类型生成另一个类型的工具类型

// 如

//  修饰符可以使用 ?  -?  readonly

type MYPartial<T> = {
  [Key in keyof T]?: T[Key];
};

type MyRequired<T> = {
  [Key in keyof T]-?: T[Key];
};

type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

type NotReadonly<T> = {
  -readonly [Key in keyof T]: T[Key];
};

type NotRead = NotReadonly<{
  readonly name?: string;
}>;
// 使用as

type GetP<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: T[P];
};

type Cap = GetP<{ name: string }>;
type ExcludeKind<T> = {
  [P in keyof T as Exclude<P, 'kind'>]: T[P];
};
// 与extends 条件类型一起用

type HasName<T> = {
  [P in keyof T]: T[P] extends { name: string } ? true : false;
};

type Names = HasName<{
  i: { name: '111' };
}>;

/**
 * Partial 将Type下所有属性都设置为可选
 * type Partial<T> = { [P in keyof T]?: T[P]; }
 */

interface Todo {
  title: string;
  description: string;
}

type TodoPartial = Partial<Todo>;

/**
 * Required 与Partial 相反
 * type Required<T> = { [P in keyof T]-?: T[P]; }
 */

type ToDORequired = Required<TodoPartial>;

/**
 * Readonly 设置为只读类型
 * type Readonly<T> = { readonly [P in keyof T]: T[P]; }
 */

type ToDoReadOnly = Readonly<TodoPartial>;

/**
 * Record<keys,Type>
 * type Record<K extends string | number | symbol, T> = { [P in K]: T; }
 */

type ToDoRecord = Record<keyof Todo, string>;
/**
 * Pick<Type,keys>
 *
 * type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
 */
type ToDoPick = Pick<Todo, 'title'>;
/**
 * Omit<Type,keys>  与PiCK 相对
 * type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
 */
type ToDoOmit = Omit<Todo, 'title'>;

/**
 * Exclude<UnionType,Members> 从联合类型里面排除一部分
 * type Exclude<T, U> = T extends U ? never : T
 */

type ToDoKeysExclude = Exclude<keyof Todo, 'title'>;

/**
 * Extract<Type,UnionType> 与Exclude相对
 * 从Type中提取所有UnionType里包含的
 */

type ToDoKeysExtract = Extract<keyof Todo, 'title' | 'name'>;

/**
 *NonNullable
 *  type NonNullable<T> = T extends null ? never : T
 */

type NonNullKeys = NonNullable<'1' | null | undefined>;

/**
 *type Parameters<T extends (...args: any) => any> =
 * T extends (...args: infer P) => any ? P : never
 *
 * Obtain the parameters of a function type in a tuple
 * 返回元组类型
 *
 */

type TodoParameters = Parameters<(name: string) => string>;

/**
 * ConstructorParameters<Type>
 * type ConstructorParameters<T extends abstract new (...args: any) => any> =
 * T extends abstract new (...args: infer P) => any ? P : never
 */

type T1 = ConstructorParameters<FunctionConstructor>;
// type T1 = string[]

/**
 * ReturnType<Type>
 * type ReturnType<T extends (...args: any) => any> =
 * T extends (...args: any) => infer R ? R : any
 */

type R1 = ReturnType<() => number>;
/**
 * 返回实例组成的类型
 * type InstanceType<T extends abstract new (...args: any) =>
 * any> = T extends abstract new (...args: any) => infer R ? R : any
 */
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// type T0 = C
/**
 * type ThisParameterType<T> =
 *  T extends (this: infer U, ...args: any[]) => any ? U : unknown
 */
function toHex(this: Number) {
  return this.toString(16);
}
/**
 * type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T
 * : T extends (...args: infer A) => infer R ? (...args: A) => R : T
 */
type TF = ThisParameterType<typeof toHex>;

/**
 * 去除this参数
 */
type OThis = OmitThisParameter<typeof toHex>;

/**
 * ThisType 标记上下文this类型
 * noImplicitThis 必须启用,标记this的上下文
 */

type tType = ThisType<{} & { name: 1 }>;

interface Box {
  height: number;
  width: number;
}

interface Box {
  height: number;
  name: string;
}

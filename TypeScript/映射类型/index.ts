// 映射类型是使用了 泛型作为索引名 创建每个索引的类型， keyof 创建 进行遍历

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// 通过as实现键名的重新映射

type MappedTypeWithNewProperties<Type> = {
  [Property in keyof Type]: Type[Property];
};

// 使用模板字面量
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

// 利用条件类型返回一个 never 从而过滤掉某些属性:
// Remove the 'kind' property
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property];
};

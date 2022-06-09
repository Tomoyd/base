//  对一个对象类型操作，返回一个字符串或数字字面量的Union
type a = '11';
type Keys = keyof a; // 字面量等基本类型返回字面量的封装对象的属性Union
// 一个属性也没有将返回一个never
type IndexType = {
  [index: string]: string;
};
type IndexTypeKeys = keyof IndexType; // JavaScript对象的属性值会被强制转换为一个字符串

// typescript [数字字面量]

// 类
class Dog {
  name: string;
}

type DogKeys = keyof Dog; // type DogKeys = "name"

// 接口
interface Inter {
  num: number;
}
type InterKeys = keyof Inter; //type InterKeys = "num"
type Cat = {
  age: number;
  name: string;
  [1]: number;
};

type c = keyof (keyof Cat); //type c = "age"

enum Opt {
  q = '1',
  c = 1,
}

type O = {};
type OptKeys = keyof Opt;

type undefinedKey = keyof undefined; //type NeverKey = never
type NullKey = keyof null; //type NullKey = never
type OKey = keyof {}; //type OKey = never
type UnknownKey = keyof unknown; //type UnknownKey = never
type VoidKey = keyof void; //type VoidKey = never
type NeverKey = keyof never; //type NeverKey = string | number | symbol
export {};

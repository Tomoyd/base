export {};

// 变量空间

let name = '1123344';

const age = '18';
var gender = 'male';

class Dog {}

// 尝试把类型赋值给 变量时将会报错

type Cate = { name: '112' };

// const cate = Cate;

type Tree = { name: string; color: string };

interface Movie {
  type: '美剧' | '日剧';
}

// 尝试将变量空间的赋值给类型
const p = '1132';
type Cat = p;
//'p' refers to a value, but is being used as a type here

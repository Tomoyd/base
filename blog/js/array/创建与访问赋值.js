// 数组: 在js中可以理解为以number为索引的对象

// 数组构造函数： Array

/**
 * 当Array只有一个参数N时，返回N长度的空数组,空数组不会被forEach这样函数遍历到
 * 当有多个参数时，这些参数作为数组项，创建一个数组
 *
 * 判断是否元素为empty的方式，可以查看索引是否是其属性
 * 使用Array 不使用new Array调用都是一样的
 */

const a = new Array(3);
a[0] = 1;
a[2] = 2;
console.log('a.length', a.length);
a.forEach((i) => {
  console.log('i', i);
});

console.log('a', a);

const b = Array(10, 20);
console.log('b', b);
// const a = [];

// 使用字面量方式创建
const a1 = [20];
// typeof a1, //返回object
// typeof a1,返回object 无法判断 array 判断数组的方式
console.log(
  a1 instanceof Array,
  Array.isArray(a1),
  Object.prototype.toString.apply(a1).slice(8, -1).toLowerCase() === 'array'
);

// 访问 索引访问 // 无效索引,或者索引非实例属性，返回undefined
console.log('a1[0],a1[2],a[-1],a[1]', a1[0], a1[2], a[-1], a[1]);

// 赋值 索引进行赋值, 索引为无效的时候会作为一种对象string属性，
// 有效索引则按有效赋值，且索引大于当前最大索引时会改变数组长度
// 会将有效的字符串数字索引转换为数字索引

a1[0] = 0;
a['3'] = 3;
a1[7] = 7;
a1[-1] = 1;
a1[-99] = 99;
console.log('a1,a1.length', a1, a1.length, a1.join(''), a1.toString());

export {};

// 转化为字符串
// toString 将数组元素转化为字符串且以逗号间隔，
// join 可以接收一个间隔符，如果不传参表现与toString 一致
const a = [1, 2, 3];
const a1 = [4, 5, 6];
console.log(a.toString(), a.join(), a.join('-'));

// 数组操作：pop push shift unshift 对数组一端进行操作
/**
 *  pop 从数组尾部移除元素，且返回这个元素或者返回undefined
 *  push 从数组尾部添加一个或多个元素并返回数组的长度
 *  shift 从数组开始位置移除元素，且返回移除的元素或undefined
 *  unshift 从数组开始位置插入一个或多个元素，并返回数组长度
 */

const poppedItem = a1.pop();
const length = a1.push(12);
const shiftItem = a1.shift();
const len2 = a1.unshift();

// delete  如对象删除属性一样，数组也可以用delete，这样该位置的就位empty，不过会访问时会返回undefined值
const d = [1, 2, 3];
delete d[0];
console.log('d', d, d[0]);

// 合并数组
// concat,可以将多个数组进行合并,返回一个数组
const c = a1.concat(d, a, 1);
console.log('c', c);

// 删除一个或多个数据，splice，
// 如果传入第三项则从第一参数位置开始插入相应的数据
// 要删除的数量小于等于0 时将不会删除
const e = [1, 2, 3];
const res = e.splice(0, 1, 11, 4, 8);
console.log('res,e', res, e);

// slice 截取一部分数据 [start,end) 返回一个新数组
// 为负数时相等于 length+end
const f = [1, 2, 3, 4];
console.log(f.slice(0, -1), f.slice(-2, -1));

// 自动执行 toString 当基础值是被需要时候，array自动发生转换 如和字符串相加或者直接显示输出到网页
// document.getElementById('demo').innerHTML = fruits;

console.log('' + a1);

// sort 排序  默认按字母顺序对数组元素进行排序，且会将元素值当做字符串进行比较
// 可以传入比较函数 (a,b)=> r;
// 比较函数返回值如果是负值，表示a应该在b前面，
// 比较函数如果是正值表示a排到b的后面
// 0 值则不变
// sort 进行Random随机排序时会产生问题，因为排序的几率导致random失效
// 随机生成使用Fisher Yates  shuffle(费舍尔洗牌方式)，遍历每一项与未进行洗牌的随机生成的项进行交换

const h = [1, 2, 3];
h.sort((a, b) => {
  console.log('a,b', a, b);
  return -1;
});
console.log('sort', h);

// reverse()  对数组进行反转
h.reverse();
console.log('reverse', h);
console.log('Max', Math.max.apply(null, h), Math.min.apply(null, h));

export {};

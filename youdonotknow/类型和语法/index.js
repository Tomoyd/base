/**
 * 对于语言引擎和开发者来说，类型定义了值的内部特征，定义了值的行为，使它区别于其他值
 */

/**
 * 内置类型
 * 1. string
 * 2. number
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. symbol
 *
 * 7. object
 * 使用typeof来查看其值的类型
 * 变量是没有类型的只有值才有
 *
 * typeof 后跟一个 没有在作用域声明的变量，也会返回 undefined
 * typeof 有一套自己的安全机制，所以没对未声明的报错，
 * 这样可以利用这种机制对一些undeclared的变量做检测（只关心是否未undefined）且不会触发错误，有时是个不错的办法
 */

// 值

/**
 * 数组
 * 数组 与它的索引最大值创建数组长度，从而可以实现空白单元
 * delete arr1[index] 可以删除单元，单不会改变length
 * 如果键值字符串能转化为数字会被强制转化为数字
 *
 * 类数组可以通过 Array.from 或者 Array.prototype.slice.call(类数组)方式返回数组
 */

/**
 *
 * 2.字符串
 * 字符串是不可变的，字符串的成员函数不会改变其原始值，并且返回一个新的字符串
 * 与数组相似，都有索引(老版本的IE中不支持索引只能通过，字符串charAt)，indexOf 及concat（ES5后） 方法
 * 可以借助数组的方法处理字符串比如join map //字符串反转不可以借助reverse
 */

let str1 = 'str1';

// @ts-ignore
str1[0] = '1';

console.log('str1', str1); // str1 str1
// 借助数组的join方法
console.log('a', Array.prototype.join.call(str1, '_'));

// 数
/**
 *
 * 十六进制： 0x7899
 * 八进制 ： 严格模式废弃0879 支持 0o666
 * 二进制 ：0b999
 */
console.log('42.0===42', 42.0 === 42);

// 小数点后的0 可以省略因此 42. 会被识别为数值 所以42.toFixed() 会被报错 42..toFixed()或者 42 .toFixed

console.log((42).toFixed(2), (42).toFixed(), (42).toFixed());

/**
 * 精度
 * 0.1 和0.2 无法用二进制精确表示，0.2+0.1 不等于0.3
 *
 * 2^-52 通常作为精度
 * Math.MAX_VALUE:1.789e+308
 * Math.MIN_VALUE:5e-324
 * 整数的安全范围 2^53 - 1
 * Math.MAX_SAFE_INTEGER
 * Math.MIN_SAFE_INTEGER
 */
/**
 * 整数检测
 * Math.isInteger polyfill typeof num == "number" && num % 1 == 0
 * Math.isSafeInteger
 * polyfill:
 * Number.isInteger( num ) &&  Math.abs( num ) <= Number.MAX_SAFE_INTEGER
 */

/**
 * 32 位有符号整数 比如 a|0  | 操作就是只适用32位
 * Math.pow(2,31) Math.pow(-2,31)
 */

/**
 * 特殊的值
 *
 * null 和undefined
 *
 * null 表示是一个空值，表示目前没有值
 * undefined 表示没有值或从未赋值
 *
 * null 是一个关键值，不能用做标识符，undefined 可以用做标识符
 *
 * void 运算符可以得到undefined 按照习惯通常通过 void 0 得到undefined
 *
 * NaN 不是一个有效数值 NaN 是数字类型，唯一自己不等于自己 非自反
 * window.isNaN 对非有效数字都会返回true 不是数字或者NaN都会返回true  bug
 * Number.isNaN  typeof n ==="number"&& window.isNaN(n)   比window准确  n!==n
 */

const a = 'A';
console.log('first', a, void a); // first A undefined

// @ts-ignore
console.log('isNaN(99)', isNaN('num')); // true

console.log('Number.isNaN ', Number.isNaN('99')); // false

/**
 * 无穷和0
 *
 * -Infinity
 * +Infinity
 *
 * -0 ===0 //true 正负号是为了保留符号信息
 * 1/-0 === -Infinity
 *
 */

console.log('Infinity-Infinity', Infinity - Infinity); // NaN
console.log('Infinity+Infinity', Infinity + Infinity); // Infinity
console.log('Infinity*Infinity', Infinity * Infinity); // Infinity
console.log('Infinity/Infinity', Infinity / Infinity); //NaN

/**
 * 特殊等式
 * Object.is 可以准确比较两个数是否相等
 * 不过能使用=== 和== 尽量不使用Object.is
 */

if (!Object.is) {
	Object.is = function (v1, v2) {
		// 处理-0 0
		if (v1 === 0 && v2 === 0) {
			return 1 / v1 === 1 / v2;
		}
		// 处理NaN
		if (v1 !== v1) {
			return v2 !== v2;
		}
		return v1 === v2;
	};
}

/**
 * 值与引用
 * JavaScript中，变量引用指向的是值，变量之间没有任何引用和指向关系
 * 简单值：值复制 进行复制传递
 * 复制值：引用复制 进行复制传递
 */

/**
 * 强制类型转换
 * 1. valueOf 返回基本类型？ 否
 * 2. toString 返回基本类型
 * Number(null)=>0
 * Number(undefined)=>NaN
 * Number(true)=>1
 * Number(false)=0
 */

/**
 * 假值
 * 0 -0 false null '' undefined NaN
 */

/**
 * ~x =-(x+1)
 * 可以用来截除小数
 * ~~49.6 === 49
 */

/**
 * parseInt(num,radix)  11xuu  11
 * parseInt( 1/0, 19 ) // 18
 * Number 11xuu NaN
 */
let to = {
	num: 21,
	toString: function () {
		return String(this.num * 2);
	},
};

// @ts-ignore
console.log('parseInt( to );', parseInt(to));

/**
 * 有封装函数的会被封装
 *
 * Object(11),Object("112")ß
 *
 * 没有的将会返回一个常规对象
 * Object(null) Object(undefined)
 */

/**
 * 其他值与boolean值相比，先将boolean执行ToNumber
 * (1) 如果 Type(x) 是布尔类型，则返回 ToNumber(x) == y 的结果;
 * (2) 如果 Type(y) 是布尔类型，则返回 x == ToNumber(y) 的结果
 */
/**
 * 字符串和数字比较
 * 字符串会先进行数字转换再进行比较
 */

/**
 * null 和画undefined  == true
 * 
 */

/**
 * 对象和非对象之间
 *  对象进行ToPrimitive 操作
 */
/**
 * ToString 操作
 * JSON.stringify 对象的toJSON
 * JSON.stringify(a, function(k,v){return k // 返回undefined则忽略})
 */

/**
 * ToBoolean 
 * undefined null "" false 0 '' NaN
 */

/**
 * <
 * > 比较
 * ToPrimitive
 * 字符串首字母比较
 */



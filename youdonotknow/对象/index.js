// 基础类型  对象类型
/**
 * 1. string
 * 2. number
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. object
 */

// 内置对象  本质上只是一些内置函数
/**
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Object
 * 5. Function
 * 6. Array
 * 7. Date
 * 8. RegExp (regular expression)
 * 9. Error
 */

/**
 * 对象的属性都是字符串（即使是数字也会被自动转为字符串），符合标识符定义的都可通过.方式访问
 * 都可通过[...]访问
 * es6 支持[变量]声明
 */

/**
 * 浅拷贝可以使用Object.assign()
 * 深拷贝
 */

const isArray = (obj) =>
	Object.prototype.toString.call(obj) === '[object Array]';
const isObject = (obj) =>
	Object.prototype.toString.call(obj) === '[object Object]';

function copyDeep(obj) {
	let newObj = null;
	if (isArray(obj)) {
		newObj = obj.map((item) => {
			return copyDeep(item);
		});
		return newObj;
	}
	if (isObject(obj)) {
		newObj = {};
		Object.keys(obj).forEach((k) => {
			newObj[k] = copyDeep(obj[k]);
		});
		return newObj;
	}
	if (typeof obj === 'object') {
		return obj;
	}

	return obj;
}

const testCopyDeep = {
	name: '123',
	c: (name) => name,
	d: [
		{
			name: 12343,
			num: Date.now(),
			sayHello: () => {
				console.log('hello');
			},
		},
	],
};
let c = copyDeep(testCopyDeep);
console.log('c', c);

/**
 * 属性描述符
 * ES5 之后的特性
 *
 *
 * writable 决定是否可以修改值
 * configurable: 决定是否可配置 比如不可删除且不可再进行描述符配置，否则配置TypeError
 * enumerable: 是否可枚举  for in
 * set:
 * get:
 * Object.getOwnPropertyDescriptor
 * Object.defineDescriptor
 */

Object.defineProperty({ a: '' }, 'a', {
	writable: false,
	value: 8,
	enumerable: true,
	configurable: false,
});
/**
 * 冻结相关API
 * Object.preventExtensions()
 * 禁止添加属性
 * Object.seal()
 * 禁止添加且禁止删除，只能修改(调用了Object.preventExtensions,且将configurable置为false)
 * Object.freeze,
 * 调用了Object.seal() 且将writable 置为false
 *
 * 深度冻结可以遍历执行Object.freeze
 */

const nameObj = {
	a: '1',
};
Object.preventExtensions(nameObj);

delete nameObj.a;

console.log('nameObj', nameObj);

/**
 * [[Get]] 操作
 * 获取对象某个属性时，会进行更深层次的查找比如，[[Prototype]] 原型链查找
 * 且不存在属性时也不会报错，会返回一个undefined,这种情况需要区分属性值是undefined还是不存在这个属性
 */

/**
 * [[Put]] 操作
 * 如果存在这个属性
 * 1. 判断描述符是否有setter 有则使用setter，
 * 2. 描述符writable是否为false 是严格模式下报TypeError，非严格模式下，静默失败
 * 3. 如果都不是，设置改属性的值
 */

/**
 * getter setter
 *
 * 当有getter setter时会忽略 writable和value 属性,且不能与writable和value同时使用
 */

let getterObj = {
	get h() {
		return this.__a__;
	},
	set h(v) {
		this.__a__ = v;
	},
};

Object.defineProperty(getterObj, 'name', {
	get() {
		return '999';
	},
});

console.log('getterObj.name', getterObj.name);

/**
 * 存在性
 * propertyName in obj 会检测其本身及其原型链上是否存在
 * hasOwnProperty  Object.prototype.hasOwnProperty
 *
 * 有的对象 原型链接上可能没有链接Object.prototype.hasOwnProperty 如Object.create(null)
 * 因此安全的操作可以
 * Object.prototype.hasOwnProperty.call(obj,propertyName)
 *
 */

/**
 * 不可枚举，不可用Object.keys() for in 访问到
 * getOwnPropertyNames() 可以获取自己所有的属性值
 * Object.keys()获取到也是自己的属性
 */

/**
 * 遍历 for in 下标访问
 * for of 值访问 消耗迭代器iterator  消耗[Symbol.iterator] 属性 next
 */
let myObject = {};
Object.defineProperty(myObject, Symbol.iterator, {
	enumerable: false,
	writable: false,
	configurable: true,
	value: function () {
		var o = this;
		var idx = 0;
		var ks = Object.keys(o);
		return {
			next: function () {
				return {
					value: o[ks[idx++]],
					done: idx > ks.length,
				};
			},
		};
	},
});

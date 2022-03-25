// 构造函数,

class CoolGuy {
	specialTrick = '';

	constructor(trick) {
		this.specialTrick = trick;
	}

	showOff() {
		console.log('first', this.specialTrick);
	}
}

const joe = new CoolGuy('133');

joe.showOff();

// 属性设置和屏蔽

/**
 * 如果对象中已经存在某个属性，对这个属性的设置操作，会屏蔽原型链的
 * 屏蔽是为了类属性的继承
 */

/**
 *
 */
const parentObj = {
	a: 'A',
};

Object.defineProperty(parentObj, 'b', {
	value: 'b',
	writable: false,
	enumerable: true,
});

Object.defineProperty(parentObj, 'c', {
	get() {
		return this.__c__;
	},
	set(val) {
		this.__c__ = val;
	},
	enumerable: true,
});

const childObj = Object.create(parentObj);

childObj.a = 'AA';

childObj.b = 'BB';

childObj.c = 'CC';

console.log('childObj', childObj);
console.log('parentObj', parentObj);

Object.defineProperty(childObj, 'b', {
	value: 'BB',
	enumerable: true,
});
Object.defineProperty(childObj, 'c', {
	value: 'CC',
	enumerable: true,
});
console.log('childObj', childObj);
console.log('parentObj', parentObj);

/**
 * 隐式赋值与屏蔽
 * 操作发生了设置，屏蔽
 */

const originalObj = {
	a: 1,
};

const myObj = Object.create(originalObj);

console.log(myObj.hasOwnProperty('a')); //false

myObj.a++;

console.log(myObj.hasOwnProperty('a')); // true

console.log('myObj', myObj.__proto__);

function NewObj() {}

const newObj = new NewObj();
// console.log('newObj.prototype', newObj.__proto__ === NewObj.prototype);

function Bar() {
	this.name = 1;
}

Bar.prototype.sayHello = () => {
	console.log('BarBarBarBarBar');
};

// ES6 开始可以直接修改现有的 Bar.prototype
Object.setPrototypeOf(Bar.prototype, NewObj.prototype);
const bar0 = new Bar();
console.log('instanceof', bar0 instanceof Bar);
console.log('Bar.isPrototypeOf(bar0)', Bar.prototype.isPrototypeOf(bar0));
bar0.sayHello();
console.log(Object.getPrototypeOf(bar0) === Bar.prototype);
// @ts-ignore
// __proto__ 绝大多数浏览器
console.log('__proto__', bar0.__proto__ === Bar.prototype);
// Object.create 方式会抛弃原来的Bar.prototype
Bar.prototype = Object.create(NewObj.prototype);
console.log(NewObj.prototype.isPrototypeOf(Bar.prototype));
const bar1 = new Bar();
bar1.sayHello(); // TypeError: bar1.sayHello is not a function

Object.defineProperty(Object.prototype, '__proto__', {
	get: function () {
		return Object.getPrototypeOf(this);
	},
	set: function (o) {
		Object.setPrototypeOf(this, o);
	},
});

// Object.create polyfill实现

if (!Object.create) {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

const Do = {
	do() {
		console.log('1233', 1233);
	},
};

const ChildDo = Object.create(Do);
ChildDo.doSome = function () {
    // 委托给Do
	this.do();
};

const SonDo=Object.create(ChildDo)
SonDo.doSome()
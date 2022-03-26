/**
 * 流动的对象
 */

export namespace importing {
	export class Foo {}
}

import Bar = importing.Foo;

let bar: Bar;

let c: typeof bar;

// const 时typeof只能是123 其他错误
const name = '123';

const name2: typeof name = '123';

// 捕获健的名称 keyof 捕获类型的键

const colors = {
	red: 'r',
	blue: 'b',
};
//type Colors = "red" | "blue"
type Colors = keyof typeof colors;

let color: Colors = 'blue';

/**
 * 异常处理
 */

try {
	throw new Error('Something bad happening!');
} catch (error) {
	console.log(error);
}

// RangeError

try {
	throw new RangeError('kkkkk');
} catch (error: any) {
	console.log('error', error.message);
}

// ReferenceError

// SyntaxError

// TypeError

// URIError

/**
 * thisType
 */

// 生成器
/**
 *
 * 第一个 next启动生成器，且在第一个yield位置停止,返回yield 后的值
 * 第二个 next完成第一个被停止的yield位置的表达式，yield 被next的入参数替代， 且在第二个yield停止，并将yield 值返回
 *
 * yield 与next 组成了双向消息传递
 * next 参数 作为yield暂停yield的接受的输入， yield 作为暂停输出
 * 第一次没有暂停的yield接受 next的入参，所以第一次next传参数也不会有yield处理，
 * 一次启动迭代器，next不带参数
 *
 *
 *
 */

let x = 1;

function bar() {
	x++;
}

function* foo(x) {
	let y = x + (yield 'hello');
	if ((yield '99') === 3) {
		y += 3;
	}
	return y;
}

const it = foo(6);

console.log('first', it.next()); //   first { value: 'hello', done: false }

console.log('second', it.next(2)); //second { value: '99', done: false }

console.log('third', it.next(3)); // third { value: 11, done: true }

console.log('fourth', it.next(4)); // fourth { value: undefined, done: true }
console.log('fifth', it.return("999")); // fifth { value: '999', done: true }

/**
 * 生成器产生值
 * 
 * for of 变量 生成器产生的迭代器， it return 可以提前结束迭代器
 */



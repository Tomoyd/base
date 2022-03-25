type ReturnTyeString = () => string;

interface ReturnInterFaceString {
	(): string;
}

declare const strFun: ReturnTyeString;

strFun();

interface Overloaded {
	(msg: string): string;
	(msg: number): number;
	sayName(): string;
}

function say(msg: string): string;
function say(msg: number): number;
function say(msg: any) {
	return msg;
}
say.sayName = () => {
	return '';
};

const overloaded: Overloaded = say;

interface Foo {
	name: string;
}

// <> 进行断言 <Foo> 很可能会和JSX 搞混 不建议
const inter = <Foo>{};

interface Foo {
	// name: string;
    bar: string,
}
interface Bar{
	bar: string;
    name:string;
}
const bar:Bar={ bar: '',name:""}
// const foo: Foo = bar as Foo;// error Bar 和FOO不能相互赋值给另一个类型

//
const foo: Foo = (bar) 



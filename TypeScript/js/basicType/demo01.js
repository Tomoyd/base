"use strict";
// tuple 元组
var a;
a = ['1', '1'];
a[0] = '2';
a[1] = '4';
console.log(a);
//枚举类型 标准数据类型的补充，命名友好方式的标识
/**
 * 默认情况下枚举编号从0开始，
 * 1.可以通过改变成员的值来更改它
 * 2. 可以从编号中取该值的名称
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var b = Color.Blue;
var r = Color.Red;
var rName = Color[0];
console.log(rName);
// any类型；用途1：比如可能包含各种类型的数组
// 在运行时可以是任何值所以编译时可以适应任何情况
var notSure = 4;
notSure = '你好我是一个字符串';
notSure = true;
notSure.toFixed();
notSure.includes('a');
//void 表示没有类型
// 用该类型声明 表示在运行时，什么都不是，比如不返回值的类型，
// 只能给该类型赋值为undfined或者null(--strickNullChecks)
// 故编译时不能调用任何方法
var unusable = undefined;
function check(person) {
    switch (person.type) {
        case 'man':
            break;
        case 'wuman':
            break;
        default:
            var a_1 = person;
            break;
    }
}
// 对象类型
var o;
o = {};
// o=9;
// o = null;
// o = undefined;
// 类型断言尖括号语法或者 as

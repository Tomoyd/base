"use strict";
/**
 * TS核心原则之一是对所具有的结构进行类型检查
 * 接口就是为类型进行命名，为代码定义契约
 * 1.所指定的元素存在即可，不必一模一样
 * 2.可选元素
 * 3.字面量方式进行传递时会对所有属性进行检查，必须是接口的属性集合内才通过
 * 可以添加变量作为任意其他属性
 */
var printLable = function (labelledObj) {
    console.log(labelledObj.label);
};
var myObj = { size: 10, label: 'Size 10 Object' };
printLable(myObj);
// printLable({ size: 10, label: 'Size 10 Object' });
printLable({ size: 10, label: 'Size 10 Object' });
var myFunc;
myFunc = function (source, subString) {
    return source.indexOf(subString) > -1;
};
var myStrArr = ['7', '9'];
myStrArr = { 1: '3 ' };
// interface NumberOrStringDictionary {
//   [index: string]: number | string;
//   length: number; // ok, length is a number
//   name: string; // ok, name is a string
// }

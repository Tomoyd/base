/**
 * global 全局对象 console process
 * 由于模块的原因 var x 在node中并不会加到global对象上,属于该模块私有的全局变量
 * 全局函数
 * setTimeout  时间在1毫秒到 24.8 天左右 超过则按1毫秒处理
 * clearTimeout
 * setInterval
 * clearInterval
 * require
 * Buffer 操作二进制
 *
 * 伪全局变量 模块内部私有的全局变量
 * __filename
 * __dirname
 * 模块内部的局部变量
 * module
 * exports
 *
 * nodejs 中导出的永远都是module.exports指向的值， 默认exports 与module.exports指向相同的对象
 * 如果修改了指向则exports导出则失去了意义
 */

var a = 1;

console.log('a', global.a);

console.log('Date.now()', __dirname);
console.log('dir');

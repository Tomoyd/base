/*
 BOM没有一个统一的标准

 window是所有浏览器都实现的BOM对象

 所有的全局对象，全局函数全局变量，包括document 
 都是window的成员
 */

/**
 * 指出浏览器窗口size大小
 *
 */
// 返回时独立设备像素单位
console.log('size>>', window.innerHeight, window.innerWidth);

// 其他的方法 如

// window.open();
// window.close();
// window.resizeTo();
// window.moveTo();

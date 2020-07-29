"use strict";
/**
 * TS核心原则之一是对所具有的结构进行类型检查
 * 接口就是为类型进行命名，为代码定义契约
 */
var printLable = function (labelledObj) {
    console.log(labelledObj.label);
};
var myObj = { size: 10, label: 'Size 10 Object' };
printLable(myObj);
// printLable({ size: 10, label: 'Size 10 Object' });
printLable({ size: 10, label: 'Size 10 Object' });

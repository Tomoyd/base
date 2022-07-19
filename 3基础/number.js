/*
数字：number 64Poit
3
1.12
1e5
1e-5
52bit(0-51 数值位)  11bits(52-62 指数位) 1bit(63 符号为)
整数的上限是15位
小数点位最大可以有17位

浮点数精度 0.1+0.2 可以先转为整数后再进行相加，再除以10

数值加字符串会变成字符串拼接
乘除减号会将字符串转换为数字处理

NaN
Infinity
-Infinity

十六进制
0xFF
toString(2-36) 


方法和属性
toString(radix)  radix 2-36
toExponential(fractionDigits) 返回字符串 指数计数，保留的小数
toFixed(fractionDigits) fractionDigits 0-20 四舍五入
toPrecision(precision) 指定精度位，包括小数点前面的位  1-21，默认不处理全部

valueOf 返回数

转换方法
number  转换全部无法转换，返回NaN
parseFloat 从第一个非空字符开始转换到第一个非数字结束
parseInt()  第二个参数为基数
无法转换 返回NaN
特殊值
最大值 Number.MAX_VALUE
最小值 Number.MIN_VALUE
正无穷大 Number.POSITIVE_INFINITY
负无穷 Number.NEGATIVE_INFINITY;
NaN
*/

(1).toString();
(9).toExponential();
(9).toFixed();
(9.65).toPrecision(1);

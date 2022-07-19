/**
 * 输出方法：
 * element.innerHtml
 * document.write ：DOM加载完成后执行，会将覆盖全部的内容，否则是按照顺序写入文档
 * alert()
 * window.print() 访问打印设备
 */

/**
 * 标识符
 * 首个字符只能是
 * 字母(A-Z|a-z)
 * $
 * 下划线_
 * 大小写敏感
 * 不能使用中划线
 *
 * JavaScript的字符集：unicode 字符集
 */

/*
 var let cont
 逗号分隔，可以一行声明多个变量
 var 可以重复声明同一个变量
 let const 同一作用域不可以重复声明，没有变量提升
 const 声明时必须初始化，且变量不可改变
 */

/*
操作符 
运算符
+
-
*
/
**
%
++
--
字符串操作符
+
比较符
>
<
==
===
>=
!=
!==
>=
<=

逻辑运算符
&&
||
!
三元符
?
类型操作
typeof
instanceof
二进制操作符
&
|
~
^
<<
>>
>>>
属性检测
in
null值检测
??
?.
yield 暂停功能
, 逗号
 */

/*
JavaScript 具有动态类型
同一变量可以接收不同的数据类型的值
*/

/*
 事件，原生事件中，事件属性后跟的是需要执行的代码片段
 onclick="alert(111)"
 */

/*
字符串
尽量不要使用new String 方式创建，
new关键字是复杂法了代码且会降低执行速度
String 会导致一些异常的结果，比如进行===比较时
  特殊的字符需要转移字符进行转义
  \"    "
  \'    '
  \\    \
  下面 6 个转义字符最初是为控制打字机、电传打字机和传真机而设计的，html中没有任何意义的
  \b  退格
  \f    换页
  \n    换行
  \r    回车
  \t   水平前置tab制表符
  \v    竖向制表符

  字符串常见方法
  1. 提取字符串的部分
    slice(start,end) [start,end)   如果是负值，将从end开始数
    slice(-12,-6)   slice(length-12,length-6)
    substring(start,end) [start,end)  如果start 和end的值小于0将被当做是0
    substr(start,length) 与slice 类似，不同在于，第二个参数是截取的数量
  2. 替换 replace
  3. 大小写 toUpperCase toLowerCase
  4. 拼接concat
  5. trim 去掉两边的空格
  6. padStart padEnd 填充 ES2017 'a'.padStart(4,'x')
  7. charAt 返回某个位置的字符，没有返回空字符串，charCodeAt(position) 返回某个位置的unicode UTF-16 0-65535
  8. 索引访问  ES5  '11'[0] 没有返回undefined 只读
  9.  split 分隔字符，返回一个数组

  10. 查找的方法
        1. indexOf(string,start)
        2. lastIndexOf(string,start)
        3. search(regexp|string) 返回一个位置
        4. match(regexp) 返回一个匹配数组
        ES6
        includes(searchValue,start) 
        startsWith(searchValue,start)
        endsWith(searchValue,length)  string的 某一部分是否以其结尾
    11. 模板字符串
*/

/*
 反斜杠可以分割字符串，但并不是安全的，不是所有的浏览器支持
 */

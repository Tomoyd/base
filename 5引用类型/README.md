## `RegExp`类型

语法 ：`let expression= /pattern/flags`

- [ ] pattern`:可以是任何简单或复杂的表达式，可以包含：
  - 字符类
  - 限定符
  - 分组
  - 向前查找
  - 反向引用

- [ ] `flags`

  > 可以带有一个或者多个标志，以表明正则表达式的行为

  - g：全局模式（global），模式将应用于所有字符串，而非在发现第一个匹配时立即停止
  - `i`：不区分大小写模式（case—insensitive）
  - `m`:多行模式（multiline），到达一行文本末尾时还会继续查找下一行是否存在匹配的项

- [ ] 元字符

  （） []  {}  \ ^ $ | ? * + . 

- [ ] 也可以通过 `RegExp`构造函数来创建正则表达式：
  - 接收两个参数：要匹配的字符串模式和标志字符串
  - 两个参数都是字符串，不能把正则表达式字面量传递给`RegExp`构造函数
  - 某些情况下需要双重转义
- [ ] 正则表达式字面量和使用构造函数创建的正则表达式不一样（ES3）
  - 字面量始终共享一个`RegExp`实例
  - 构造函数创建的每一个新实例都是新实例

#### `RegExp`实例属性

每一个实例都有以下属性：

1. global：布尔值，是否设置了g标志
2. `ignoreCase`：布尔值，表示是否设置了`i`标志
3. multiline：布尔值，是否设置了m标志
4. `lastIndex`：整数，开始搜索下一个匹配项字符起始位置，默认从0算起
5. source：正则表表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回

#### 实例方法

- `exec()`
  - 接收一个参数：要应用模式的字符串
  - 返回包含第一个匹配项信息的数组
    1. 包含两个额外的参数：index，input
    2. index：在字符串中的位置，input应用正则表达式的字符串
    3. 数组中，第一项是与增高模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串（（））
  - 没有匹配项，返回null
  - 设置全局标识情况下，每次调用返回一个匹配项，否则多次调用也将食指返回第一个匹配项信息

- `test（）`
  - 接受一个字符串参数
  - 返回一个`boolean`值

- `toLocaleString`和`toString`都会返回一个正则表达式的字面量，
- `valueOf`返回正则表达式的本身

#### 构造函数属性

适用于作用域中的所有正则表达式，基于最近一次正则表达式操作而变化

可以通过两种方式访问：长属性名和短属性名（`Opera`例外）

- `input`  ($__):最近一次要匹配的字符串

- `lastMatch`（$&）:最近一次的匹配项

- `lastParen`($+):最近一次的捕获组

- `leftContext`（$`）:input字符串中``lastMatch``之前的文本

- `multiline`（$*）：是否表达式使用多行模式，布尔值

- `rightContext`：:input字符串中``lastMatch``之后的文本

- 除此之外还要9个用于存储捕获组的构造函数属性：

  $1~$9:分别表示第一到第九个匹配的捕获组

#### 模式的局限性

- 匹配字符串开始和结束的\A和\z锚
- 向后查找
- 交集和并集类
- 原子组
- Unicode支持
- 命名的捕获组
- s（single）和x（free-spacing，无间隔）的匹配模式
- 条件匹配
- 正则表达式注释

## Function类型

#### 没有重载，同名发生覆盖

#### 函数声明和函数表达式

函数声明：解析器会提前读取函数声明

函数表达式：执行到所在的代码行才会解析

#### 作为值的函数

函数可以作为一个值当做参数传递，也可以当做一个结果返回

#### 函数内部属性

- this：函数执行的环境对象，全局作用域调用函数，指向window
- arguments：
  - 主要用途保存函数参数
  - 其有一个`callee`属性，指向拥有这个arguments对象的函数

- caller：调用当前函数的函数的引用，不可赋值

#### 函数属性和方法

- 属性

  - length：接收命名参数的个数
  - prototype：原型，是保存所有引用类型实例方法的真正所在；不可枚举的

- 方法：

  > 每个函数都有两个非继承而来的方法：apply（）和call（）
  >
  > 作用：在特定的作用域中调用参数

  - `apply()`

    接收两个参数：

    - 运行函数的作用域
    - 参数数组

  - `call()`

    接收多个参数

    - 第一个参数运行函数的作用域，（this）
    - 函数参数，一一列举传递

  - `bind()`

    会创建一个函数的实例

    这个函数实例的this通过bind（）函数的参数指定

## 基本包装类型

#### Boolean类型

​	new Boolean（false）new Boolean（true），创建的是一个对象，在布尔表达式中都会转为true

和基本类型不一样，是引用类型`typeof` 返回“object”

#### Number类型

- `toFixed（）`：自动舍入
- `toExponetial(指数)`,指数
- `toPrecision(数字位数)`：不接受参数，自动返回合适的表示，接受参数，表示所有数字的位数不包括指数部分

#### String类型

- 字符方法:

  - `charAt(position)`:返回索给定位置在的字符
  - `charCodeAt(position)`:返回字符编码
  - \[position\]:方括号访问

- 字符串操作方法

  - `concat()`
  - `slice(startPosition,endPosition):`负值与字符串长度相加
  - `substring(startPosition,endPosition):`负值都转换为0
  - `substr(startPosition,length)`：负的第一个参数与字符串长度相加，第二个转换为0

- 字符串位置方法

  - indexOf
  - lastIndexOf

- `trim()`：删除前置和后置的空格

- 大小写转换：

  - `toLowerCase（）`:
  - `toUpperCase（）`：
  - `toLocaleLowerCase()`:针对地区保证正确转换
  - `toLocalUpperCase()`:

- 匹配模式方法

  - `match(partern)`：与`RegExp`的exec相同
  - `search(partern)`:返回第一个匹配的索引
  - `replace(partern,string)`:替换匹配的，第二个参数也可以是特殊的字符序列，也可以是个函数，会向该函数传递3个参数：模式匹配项，所在位置，原函数
  - `split(parent/string,arrayLength)`:第一个参数是正则表达式或字符串，第二个为返回大数组长度

- `localeCompare()`

  - 字符串在字母表中排在字符串参数之前，返回负数
  - 等于：返回0
  - 否则返回一个正数

- 静态方法`fromCharCode()`

  接收一个或者多个字符编码转换为字符串

- HTML方法

  尽量不使用这些方法，如`anchor（name）`

## 单体内置对象

#### Global对象

> 全局对象，除了`isNaN`，`isFinite`，`parseInt`，`parseFloat`还有一些其他的方法

- URL编码方法

  - `encodeURI()`:用于整个URI，不会对本身属于URI特殊字符进行编码如冒号，斜杠问号等
  - `encodeURIComponent()`：用于URI中的某一段，对任何非标准字符进行编码

- `eval()`方法：

  相当于完整的ECMAScript解析器，接收一个参数，要执行的ECMAScript字符串，

  此中定义的任何变量和函数都不会提升

  严格模式下在`eval`中的变量和函数，外部访问不到，且不能为eval赋值

- 属性：...各种类型，特殊的值

- window对象

  ECMAScript没有指出如何访问Global对象，web浏览器将这个全局对象作为window对象的一部分加以实现

#### Math对象

###### max和min方法

用于确定一组数值中的最大和最小值，可以接受任意多的数值，也可以使用apply传入参数

###### 舍入方法

`ceil（）`：执行向上舍入，带有小数就整数加一

`floor（）`：向下舍入丢弃小数部分

`round（）`：标准四舍五入

###### random方法

生成[0,1)之间的随机数


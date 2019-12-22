#### JavaScript实现

- 核心（ECMAScript）

  - 与web浏览器没有依赖关系，web浏览器只是其宿主环境之一
  - 只是定义这门语言的基础
  - 宿主环境不仅提供ECMAScript的实现，同时提供该语言的扩展，以便语言与环境交互
  - 其他宿主环境：Node Adobe Flash 

  > ECMA主要规定了语言的组成部分：
  >
  > - [ ] 语法
  > - [ ] 类型
  > - [ ] 语句
  > - [ ] 关键字
  > - [ ] 保留字
  > - [ ] 操作符
  > - [ ] 对象

- 文档对象模型（DOM）

  - 用于HTML的应用编程接口(API)
  - 针对XML扩展
  - 将整个页面映射一个多层节点结构
  - DOM核心DOM HTML接口
  - 并不是针对`JavaScript`很多别的语言也实现了DOM（SVG，MathML，SMIL）

- 浏览器对象模型（BOM）

  - 根本上将，BOM只处理浏览器窗口和框架

  - 习惯上也把所有浏览器的JavaScript扩展算做BOM一部分

    > - 弹出浏览器新窗口的功能
    >
    > - 移动，缩放，关闭浏览器窗口的功能
    > - 提供浏览器详细信息的navigator对象
    > - 提供浏览器所加载信息的location对象
    > - 提供用户显示分辨率详细信息的scree对象
    > - 对cookies的支持
    > - 像XMLHttpReque和IE的ActiveXObject这样的自定义对象
    >
    > 
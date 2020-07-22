> 针对HTML和XML文档的一个API。DOM描述了一个层次化的节点树，允许开发人员添加，移除和修改页面的某一部分

## 节点层次

每一段标记都可以通过树中的一个节点来表示：

- Node类型:所有节点类型都继承Node类型

  - 每个节点都有`nodeType`属性，用于表明节点的类型

  - 节点类型由Node类型中定义的12个常量来表示：

    - Node.ELEMENT_NODE(1)
    - Node.ATTRIBUTE_NODE(2)
    - Node.TEXT_NODE(3)
    - Node.CDATA_SECTION_NODE(4)
    - Node.ENTITY_REFERENCE_NODE(5)
    - Node.ENTITY_NODE(6)
    - Node.PROCESSIONG_INSTRUCTION_NODE(7)
    - Node.COMMENT_NODE(8)
    - Node.DOCUMENT_NODE(9)
    - Node.DOCUMENT_TYPE_NODE(10)
    - Node.DOCUMENT_FRAGMENT_NODE(11)
    - Node.NOTATION_NODE(12)

  - nodeName和nodeValue属性来了解节点的具体信息

  - 节点关系：家族关系，每个节点都有一个`childNodes`属性，保存着一个`NodeList`对象

    - `NodeList`对象是一个类数组的对象
    - 会根据文档树动态改变，而非一个快照
    - 访问可以通过item(index)或者方括号法
    - 可以使用`Array.prototype.slice.call(someNode.childNodes,0)`将其转换为数组（非IE）
    - length属性

  - `parentNode`属性，指向文档树中的父节点

  - previousSibling和nextSibling可以访问相邻的同胞节点

  - `firstChild`第一个子节点，`lastChild`最后一个节点

  - `hasChildNodes()`判断是否有子节点（在包含一个或多个子节点情况下返回true）

  - 最后一个属性是`owerDocument`该属性指向表示整个文档的文档节点

  - 操作节点

    - `appendChild()`和`removeChild()`,如果添加的节点已存在则只是移动这个节点到最后一个，返回值新增的节点，

    - `insertBefore`：接收两个参数：一个是要插入的节点，一个参考节点

    - `replaceChild`：接收两个参数：要插入的，要替换的，将要替换的返回
    - `removeChild`：移除节点，返回被移除的节点

  - 其他方法：

    `cloneNode`:接收一个参数表示是否进行深度复制

    `normalize`：唯一作用是处理文档的文本节点，会删除空文本节点

## Document类型

document对象是`HTMLDocument`的一个实例，表示整个HTML页面，document对象是window对象的一个属性

document节点具有一项特征

- nodeType：9
- `nodeName`："#document"
- `nodeValue`:null
- `parentNode`:null
- ownerDocument:null
- 其子节点可能是一个`DocumentType`（最多一个），Element（最多一个），`ProcessingInstruction`或Comment

> Document类型可以表示HTML页面或者其他基于XML的文档，不过最常见的环视作为`HTMLDocument`实例的document对象

#### 文档的子节点

两个内置的访问子节点的快捷方式：

- `documentElement`属性：该属性始终指向HTML页面中<html>元素
- `childNodes`列表访问文档元素：
- body：指向<body>元素
- doctype：指向<!DOCTYPE>
- title
- url
- domain
- referrer
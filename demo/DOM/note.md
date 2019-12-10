#  DOM(文档对象模型)
    是针对HTML和XML文档的一个API，描述了一个层次化的节点树，允许开发人员添加删除修改某一部分
##### 1. 节点层次
    每一段标记都可以通过树中的一个节点来表示：HTML元素通过元素节点表示，特性通过特性节点表示
    文档类型通过类型节点表示，注释通过注释节点表示，总共有12种节点类型，这些类型都继承自一个基类型
###### 1.1 节点类型
       DOM1中定义了一个Node接口，该接口将由DOM中所有节点类型实现，除了IE外，在其他所有浏览器中都可以访问
       到这个类型。
       每个节点都有一个nodeType属性，用于表明节点的类型，节点类型在Node类型中定义的12个常量来表示
      
       Node.ELEMET_NODE(1)
       Node.ATTRIBUTE_NODE(2)
       Node.TEXT_NODE(3)
       Node.CDATA_SECTION_NODE(4)
       Node.ENTITY_REFERENCE_NODE(5)
       Node.ENTITY_NODE(6)
       Node.PROCESSING_INSTRUCTION_NODE(7)
       Node.COMMENT_NODE(8)
       Node.DOCUMENT_NODE(9)
       Node.DOCUMENT_TYPE_NODE(10)
       Node.DOCUMENT_FRAGMENT_NODE(11)
       Node.NOTATION_NODE(12)
       数字表示法对于IE浏览器也是适用的，考虑浏览器兼容，将nodeType属性与数字值进行比较，
       1.**nodeName与nodeValue属性**
       2.**节点关系**
            每个节点都有一个childNodes属性，其中保存着一个NodeList对象，是一种类数组对象
            保存着一组有序的节点可以通过位置来访问这些节点，它是基于DOM结构动态执行的结果，
            DOM结构的变化能够反映到NodeList对象中。
            
            访问NodeList中的节点可以通过方括号，也可以通过item()方法
            var firstChild = someNode.childNodes[0]
            var secondChild = someNode.childeNodes.item(1)
            var count = someNode.childNodes.length //访问NodeList的那一刻，其中包含的节点数量
            
            可以使用下列方法将其转化为数组
            //在IE8及之前的版本中无效
            var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0)
            类似的每个节点都有一个parentNode属性该属性
            同胞节点：通过previousSibling和nextSibling属性
            父节点与最后一个节点和第一个节点也有特殊关系，父节点的firstChild和lastChild
          hasChildNodes() 判断是否有子节点
          ownerDocument,该属性指向表示整个文档的文档节点，所有节点都有的属性，可以直接访问文档节点
       3. **操作节点**
            appendChild():在childNodes列表结尾添加一个节点，如果该节点已经是文档节点的一部分，那将
            该节点从原来位置转移到新位置，该函数返回新增的节点
            insertBefore():接收两个参数，要参入的节点和参照节点，返回插入的节点
            replaceChild():接收两个参数，一个是要插入的节点和要替换的节点，要替换的节点将由方法返回
            并且从文档树中移除
            removeChild():移除节点，接收参数，要移除的节点
            其他方法:
            cloneNode();接收一个boolean参数，表示是否进行深度复制，深度复制会复制节点及其整个子节点数
            false情况下，只复制节点本身，不会复制事件处理程序等JavaScript属性，IE会复制
            normalize()：处理文档树的文本节点，将空文本节点删除，相邻的文本节点进行合并
#### Document类型
    概述:JavaScript通过Document类型表示文档，在浏览器中，Document对象是HTMLDocument的一个实例，表示整个HTML
    页面，而且document对象是window对象的一个属性，因此可以将其作为全局对象来访问
    特性:
    nodeType的值为9;
    nodeName值为“#document”
    nodeValue的值为:null
    parentNode的值为:null
    ownerDocument的值为null
    其子节点可能是有个DocumentType(最多一个)，Element(最多一个)，ProcessingInstruction或Comment
    Document类型可以表示HTML页面或者其他基于XML的文档
    最常见的HTMLDocument实例的document对象。
    1. **文档的子节点**
        访问其子节点的快捷方式:
        1) documentElement属性始终指向HTML页面的<html>元素
        2) body属性,指向<body>元素
        所有的浏览器都支持以上两个属性
        doctype(浏览器的支持差别大)
    2. **文档信息**
        document对象有一些标准Document对象没有的属性
        如title，包含着<title>元素的文本，显示在浏览器窗口标题栏或标签页上
        URL：地址栏中显示的URL
        domain属性:页面的域名，可以设置的，不能设置为URL中不包含的域，一开始是松散的，则不能设置为紧绷的
        referrer：保存着链接到当前页面的那个页面的URL
    3.**查找元素**:
        取得某个或某组元素的引用
        getElementById():接收一个参数:要取得元素的ID,找到返回该元素，找不到返回null
        getElementsByTagName():
            参数:要取得元素的标签名
            返回:包括0个或多个元素的NodeList
            在HTML文档中会返回一个HTMLCollection对象
            与NodeList相似可以用方括号和item()访问其中的项，长度可以通过length属性取得
            还有一个nameItem()可以通过元素的name特性取得集合中的项
            
            参数也可以是"*",表示取得全部
        getElementsByName()：HTMLDocument才有的方法
            返回给定name属性的所有元素
    4. **特殊集合**
        都是HTMLCollection对象
        document.anchors 包含文档中所有带name特性的<a>元素
        document.applets <applet>
        document.forms文档中所有的form元素
        document.images img元素
        document.links 所有带href特性的<a>元素
        
    5.DOM一致性检测
        document.implementation属性就是为检测浏览器实现DOM的那些部分的属性
            DOM1只为这个属性提供了一个方法:hasFeature
                接收两个参数：要检测的DOM功能的名称和版本号 如果支持该功能则返回true
                但是返回true不代表实现和规范一致
                建议还要进行能力检测
    6. **文档写入**
        输出写入到网页中：
        4个方法：write() writeln() open close()
        write和writeln()接收一个字符串参数
        open和close分别用于打开和关闭网页的输出流
###### Element类型  
    Element类型用于表现XML或HTML元素
    nodeType为1
    parentNode:Document或Element
    nodeValue:null
    其子节点可能：Element，Text，ProcessingInstruction CDATASection或EntityReference
    属性tagName nodeName 返回一样
    1.HTML元素
        所有的Element元素都由HTMLElement类型表示，每个HTML元素中都包含以下标准特性
        1) id
        2) title 有关元素的一些附件说明信息，一般通过工具提示条显示出来
        3) lang 元素的语言代码 很少使用
        4) dir 语言的方向 值为ltr 从左到右 rtl 从右到左 很少使用
        5) className 与元素class特性对应，即为元素指定的CSS类
        上述属性都可以用来取得或修改
    2.取得特性
        方法：
        getAttribute:参数为特性名
        setAttribute:参数为特性名和特性值
        removeAttribute:参数特性名
    4.attributes属性
        Element类型是实行attributes属性的唯一DOM节点类型
        attributes属性中包含一个NamedNodeMap 与NodeList类似
        也是一个动态集合，元素的每一个特性都由一个Attr节点表示，每个节点都保存在NamedNodeMap对象中
        NamedNodeMap都有以下方法
        getNamedItem(name):返回nodeName属性等于name的属性节点
        removeNamedItem(name)
        setNamedItem(node):向列表中加节点，以节点的nodeName属性为索引
        item(pos):返回位于数字pos位置处的节点
        
        多使用getAttribute,removeAttribute setAttribute
    5. **创建元素**
        使用document.createElement()可以创建新元素，只接受一个参数，即要创建的标签名
    6.元素的子节点
        元素可以有任意数目的子节点和后代节点
###### Text类型
    文本节点由Text类型表示，nodeType值为3，nodeName:"#text" nodeValue的值为节点包含的文本
    包含可以照字面解释的纯文本内容，不支持子节点
    
    可以用nodeValue属性和data属性访问Text节点中包含的文本
    操作节点文本的方法
    appendData(text)
    deleteData(offset,count)
    insertData(offset,text)
    replaceData(offset,count,text)
    splitText(offset):从offset指定位置将当前文本节点分成两个文本节点
    substringData(offset,count):
    length属性:保存着节点中字符的数目
    1. 创建文本节点
        document.createTextNode() 接收一个参数，要插入节点中的文本
        通常情况下一个元素只有一个文本节点，在某些情况下也有多个文本节点
    2.规范化文本节点
        normalize();可以将多个相邻文本节点合并为一个节点
    3. 分割文本节点
        与normalize相反 splitText()，分割为多个文本节点  返回值为新的文本节点
##### Comment类型
    nodeType 8
    nodeName："comment"
    nodeValue ：注释的内容
    parentNode 可能是Document也可能是Element
    不支持子节点
    拥有除了splitText()之外的所有字符串操作方法
    data属性
    createComment()
#### CDATASection 类型
    只针对基于XML文档，表示CDTA区域与Comment类似
    nodeType为 4
    nodeName为 "cdata-section"
    nodeValue 为CDATA区域中的内容
    
        
  
    
                      
            
            
            
            
       
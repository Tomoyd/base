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
       3.**操作节点**
       
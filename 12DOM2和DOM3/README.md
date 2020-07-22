> DOM1主要定义了HTML和XML文档的底层结构
>
> DOM2和DOM3在DOM1的基础上引入更多的交互能力，支持更高级的XML特性

## DOM变化

> DOM2:只是在DOM1级的基础上增加新方法和新属性来增强既有类型
>
> DOM3：增强了既有类型，同时引入了一些新类型

通过`documen.implementation.hasFeature('core',"2.0")`等判断DOM模块的支持情况

#### 针对XML命名空间的变化

> 有了命名空间，不同的xml文档的元素就可以混合在一起
>
> 从技术说：HTML不支持XML命名空间，XHTML支持命名空间
>
> 命名空间使用xmlns指定
>
> 明确的为xml命名空间指定前缀，可以使用xmln后跟冒号再跟前缀

1. Node类型的变化

   - localName：不带命名空间前缀的节点名称
   - namespaceURI：命名空间URI或者null
   - prefix：命名空间前缀或者null

2. 其他方面的变化

   - DocumentType类型的变化

     重新增添了3个属性 publicId systemId和InternalSubset

   - importNode():从文档中取得一个节点，导入另一个文档

   - defaultView指向文档的窗口或框架，IE中parentWindow

   - createDocumentType，createDocument

   - createHTMLDocument

3. Node类型的变化

   - isSupported方法，当前节点具有什么能力，接收两个参数，特性名和版本号，最好还是使用能力检测
   - isSameNode（）isEqualNode（）
   - setUserData（）

4. 框架变化

   > contentDocument:属性，包含一个指向框架内容的文档对象的指针
   >
   > IE中支持contentWindow.document

## 样式

> 在HTML中定义样式的方式有3种：
>
> - [ ] link元素包含尾部样式表
> - [ ] style元素嵌入样式
> - [ ] style特性定义特定元素的样式

DMO2针对这三种应用样式提供了一套API

确定浏览器是否支持DOM2级能力

```javascript
document.implementation.hasFeature("CSS","2.0")
document.implementation.hasFeature("css2","2.0")
```

#### 访问元素的样式

style特性访问，包含着通过style特性指定的所有样式信息

defaultView的getComputedStyle（）：计算样式的元素和一个伪元素字符串，IE元素的currentStyle

#### 操作样式表

styleSheets集合来表示，有一个cssRules或rules属性取得规则列表

styleSheet有insertRule方法，参数规则文本和在哪插入规则的索引

deleteRule，参数：要删除规则的索引

#### 
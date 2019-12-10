# JavaScript 与XML
    支持DOM2的浏览器创建XML文档
    var xmldom=document.implementation.createDocument(namespaceuri,root,doctype)
    要创建一个root元素的XML文档，一般
    var xmldom=document.implementation.createDocument("","root",null)
    检测浏览器是否支持DOM2级XML
    
    var hasXmlDom = document.implementation.hasFeature("XML","2.0")
    2.DOMParser类型
        为了将XML解析为DOM文档，Firefox引入了DOMParser类型，
        首先创建一个DOMParser实例
        var parser= newDOMParser();
        再使用parseFromString()方法，接收两个参数，要解析的XML字符串和内容类型(始终为"text/xml")
        var xmldom=parser.parseFromString("<root><child/></root>","text/xml");
        在解析发生错误时会返回一个document对象，文档元素为<parsererror>
    3. XMLSerializer类型
        提供相反的功能，将DOM文档序列化为XML字符串
        有一个serializeToString()
        var serializer=new XMLSerializer();
        var xml=serializer.serializeToString(xmldom)
        
    
# DOM扩展
    对DOM的两个主要扩展是Selectors API(选择符API)和HTML5
##### 选择符API
    根据CSS选择符选择与某个模式匹配的DOM元素
    jQuery的核心就是通过CSS选择符查询DOM文档取得元素的引用
    
    Selectors API W3C发起制定的一个标准
    致力于让浏览器原生支持CSS查询
    
    核心两个方法:
    querySelector(): 接收一个CSS选择符，返回与该模式匹配的第一个元素，若没有找到返回null
        Document类型调用时，会在文档元素范围内查找匹配的元素
        Element类型调用时，会在该元素的后代元素的范围内查找元素
    querySelectorAll():接收的参数与querySelector一样
        返回所有匹配的元素，返回NodeLIst的一个实例，是一个快照，而非动态的查询
    matchesSelector():
        是Selector API Level2 规范为Element类型新增的一个方法
        接收一个参数即 CSS选择符
        如果调用元素与该选择符匹配则返回true 否则返回false
        此方法应该注意浏览器支持
#### 元素遍历
    对于元素中的空格，IE9及之前版本不会返回文本节点，其他浏览器都会返回，这就在使用childNodes和firstChild等
    属性时的行为不一致，为了弥补这一差异
    Element Traversal 规范新定义了一组属性
    childElementCount:返回子元素的个数(不包括文本节点和注释)
    firstElementChild:指向第一个子元素
    lastElementChild:指向最后一个子元素
    previousElementSibling:指向前一个同辈元素
    nextElementSibling:指向后一个前辈元素
    HTML5围绕如何使用新增标记定义了大量JavaScript API
    1 与类相关的扩展
        1.1 getElementsByClassName()方法
            接收一个参数，即一个包含一个或多了类名的字符串 返回带有指定类的所有元素的NodeList
            传入多个类名时类名的前后顺序不重要
        1.2 classList属性
            操作类名时可以通过className属性添加，删除和替换类名，
            classList属性是新集合类型DOMTokenList的实例
                与其他类似，可以item() 方括号 和length属性
                还有以下方法
                add(value)
                contains(value)
                remove(value)
                toggle(value) 存在给定值，则删除它，不存在则添加它   
    2.焦点管理
    HTML5添加了辅助管理DOM焦点的功能,
    document.activeElement属性：始终引用DOM中当前获得了焦点的元素
    元素获得焦点的方式有页面加载，用户输入和在代码中使用focus方法
    document.hasFocus()方法，判断文档是否获得了焦点
    3.HTMLDocument的变化
        HTML5 扩展了HTMLDocument，增加了新的功能
        1.readyState属性
            有两个可能值：
                1.loading正在加载
                2.complete 已经加载完文档
        2.兼容模式
            document.compatMode：采用了那种渲染模式
            标准模式:值为CSS1Compat
            混杂模式:BackCompat
        3.head属性
            作为对document.body的补充
            document.head document.getElementsByTagName("head")[0]
        4.字符集属性
            charset属性 默认情况下为UTF-16
            defaultCharset表示根据默认浏览器及操作系统的设置，当前文档默认的字符集应该是什么
        5.自定义数据属性
            HTML5规定，可以为元素添加非标准的属性，但要加前缀data-
            添加指定以属性之后，可以通过元素的dataset来访问自定义属性的值，
            dataset是DOMStringMap的一个实例，名值对的映射，在其中属性名没有data-前缀
        6.插入标记
            1.innerHTML属性
                在读模式下，innerHTML属性返回与调用元素所有子节点对应的HTML标记
                在写模式下，innerHTML根据指定的值创建DOM树，然后替换原先的所有子节点
            2.outerHTML属性
                在读模式下返回它的元素及所有子节点的HTML标签
                在写模式下，根据指定的HTML字符串创建新的DOM子树，然后用这个DOM子树完全替换调用元素
            3.insertAdjacentHTML方法
                要插入的位置和要插入的HTML文本
                beforebegin:当前元素之前，插入同辈
                afterbegin:在当前元素之下插入一个子元素或者第一个子元素之前再插如新的子元素
                beforeend:在当前元素之下，插入一个新的子元素或在最后一个子元素之后插入一个新的子元素
                afterend:在当前元素之后插入一个紧邻的同辈元素
        7. scrollIntoView()
            控制页面滚动，
            scrollIntoView可以在所有HTML元素上调用
    专有扩展:
           1.  文档模式
            meta标签设置 
           2.children属性 元素子节点时与childNodes没有区别
           3.contains() 是否包含某个节点
           4.插入文本
                4.1 innerText属性 textContent 替换元素中的内容
                4.2 outerText属性 替换整个元素
           5.滚动
            
                
          
    
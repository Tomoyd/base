# 事件
####   1 事件流
            事件流描述的是从页面接收事件的顺序
            1.1 事件冒泡
                    即事件开始时由最具体的元素(文档嵌套层次最深的那个节点)接收，然后逐级向上传播到
                    较为不具体的节点
            1.2 事件捕获
                由不具体的节点到最具体的节点的顺序接收事件
            1.3 DOM事件流
                DOM2级事件 规定事件流包括三个阶段，事件捕获阶段，处于目标阶段和事件冒泡阶段
####   2 事件处理程序
            响应某个事件的函数就叫做事件处理程序或者事件侦听器，事件处理程序的名字以on开头
            2.1  HTML事件处理程序
                与事件处理程序同名的HTML特性指定，如 onclick特性
                缺点:
                    1. 时差问题，可能在HTML页面一出现就触发相应事件，但当时的时间处理程序有可能不具备执行条件
                    2.扩展时间扩展程序的作用域链在不同浏览器中会导致不同结果
                    3. HTML与JavaScript代码紧密耦合
                    
                 更多使用JavaScript指定事件处理程序
            2.2 DOM0级事件处理程序
                JavaScript指定事件处理程序
                首先获取操作对象的引用
                将事件处理程序属性设置为一个函数
                将事件处理程序属性设置为null
            2.3 DOM2级事件处理程序
                addEventListener()
                removeEventListener()
                参数 事件处理程序名称和事件处理程序函数及事件流方式
            2.4 IE事件处理程序
                类似的两个方法:
                attachEvent() 作用域指全局作用域
                detachEvent()
                参数 事件处理程序名称和事件处理程序函数
            2.5 跨浏览器事件处理程序
                考虑到以上各种情况判断即可
####   3 事件对象
            在触发DOM上的某个事件时，会产生一个事件对象event，这个时间包含着所有与事件相关的信息
            3.1 DOM中的事件对象
                兼容DOM的浏览器会将一个event对象传入到事件处理程序中
                btn.onclick= function(event){
                    alert(event.type) //"click"
                }
                btn.addEventListener("click", function(event){
                    alert(event.type) // "click"
                },false);
               通过HTML特性指定事件处理程序时，变量event 中保存着event对象
               <input type="button" value="click me" onclick="alert(event.type)" >
               了解event属性和方法 p374
            3.2 IE中的事件对象
                JS特性指定时 作为事件的一个window对象的属性 window.event
                attachEvent event对象作为参数传入
                HTML特性指定时 event对象作为传入
            3.3 跨浏览器事件对象
                根据以上情况进行判断
                
####   4 事件类型
            DOM3规定了以下几类事件
            1.UI事件
                当用户与页面元素交互是触发，指那些不一定与有用户操作有关的事件。
                现有的UI事件如下
                DOMActivate:表示元素已经被用户操作激活，在DOM3中已废弃，不建议使用这个事件
                load:当页面完全加载后在window上面触发，当所有框架都加载后在框架集上触发，或者当嵌入的内容加载完
                    后在<object>元素上面触发，当图像加载完毕时在img元素上面触发
                    用法：javaScript代码，或者在body元素加一个onload事件，图像上面也可以指定onload事件
                        有一些浏览器script上也支持load事件
                unload:当页面完全卸载在window上面触发，当所有框架都卸载后在框架集上触发，或者当嵌入的内容卸载完
                       后在<object>元素上面触发
                abort:在用户停止下载过程中，如果嵌入的内容没有加载完，则在<object>元素上面触发
                error:当发生JavaScript错误时，在window上面触发，无法加载图像时在img上触发，无法嵌入内容时在<object>
                上触发，或者当有一个或多个框架无法加载时在框架上触发
                select:当用户寻找文本框中一个或多个字符时触发
                resize:当窗口或框架大小变化时在window上触发
                    JavaScript特性指定，或者HTML中body指定
                scroll:当用户滚动带滚动条的元素中的内容时，在该元素上触发。body元素中包含所加载页面的滚动条
                        在window对象上发生，混杂模式下body中的scollLeft和scrollTop来监控，
                
                除了DOMActivate事件，其他事件都与DOM2级事件的HTML事件有关，要确定是否支持DOM2级事件规定的HTML事件
                document.implementation.hasFeature("HTMLEvents","2.0")
                
            2.焦点事件
                在也页面元素获得或者失去焦点时触发，与document.hasFocus()和document.activeElement()相配合
                blur:在元素失去焦点时触发，这个时间不会冒泡，所有浏览器都支持它
                DOMFocusIn:在元素获得焦点时触发，与HTML的focuns事件等价，冒泡，DOM3废除，
                DOMFocusOut:失去焦点时.....
                focus:在元素获得焦点时,不冒泡，所有浏览器都支持
                focusin:在获得焦点时触发，冒泡
                focusout:失去焦点时触发，是blur的通用版本
                确定浏览器是否支持这些事件
                document.implementation.hasFeature("FocusEvent","3.0") 
            3.鼠标事件
                click:单击 可以通过键盘触发
                dbclick:双击
                mousedowm:按下了任意鼠标按钮时
                mouseenter:当鼠标首次从外部移到到元素范围之内时触发，不冒泡
                mouseleave:位于元素上方的鼠标光标移动到元素范围之外时
                mousemove:当鼠标在元素内移动时重复触发，不能通过键盘触发
                mouseout:由一个元素上方，移入另一个元素时
                mouseup:在用户释放鼠标按钮时触发
                mouseover：在鼠标指针位于一个元素外部，然后用户将其首次移入另一个元素边界之内时触发
                判断是否支持所有事件
                document.implementation.hasFeature("MouseEvent","3.0")
                判断是否支持以上DOM2级事件(dbclick,mouseenter,mouseleave除外)
                document.implementation.hasFeature("MouseEvents","2.0")
            4.滚轮事件
                客户区坐标位置
                    鼠标事件都是在浏览器视口中特定位置发生的，这个位置信息保存在事件对象的clientX和clientY属性中
                    他们的值表示鼠标指针在事件发生时处于视口中的水平和垂直坐标
                页面坐标位置
                    通过事件对象的pageX，pageY属性，能告诉在页面上面位置发生的不是视口的左边和定边计算的。
                    没有滚动情况下，与客户区的两个属性值是相等的，
                    滚动情况下可以结合document.body(混杂模式)或document.documentElement(标准模式)中的scrollLeft和
                    scrollTop属性计算，即相加
                屏幕坐标的值，相对于电脑整个屏幕的值，screenX，scrollY
                修改键:
                    鼠标和键结合，Shift Ctrl Alt Meta
                    DOM规定了四个属性:
                        shiftKey
                        ctrlKey
                        altKey
                        metaKey
                     相应的键被触发则其包含的值也变为true
                mousewheel事件，事件的wheelDelta的值，正负可以判断滚轮的方向
                Firefox支持一个名为DOMMouseScroll的类似事件
                有关信息保存在detail中
     
            5.文本事件
                    textInput，文本插入文本框之前会触发
            6.键盘事件
                keydown：按下任意键时触发，如果按着不放则重复触发
                keypress：按下字符键时触发，如果按着不放则重复触发
                keyup：是否键时触发
                键码，event对象的keyCode属性
                inputMethod 属性表示把文本输入到文本框中的方式
            7.合成事件
            8.变动事件
                p403
            9.变动名称事件， 已废弃
            此外还存在一些专有事件，不同浏览器实现有可能不一致
            10. HTM5事件 p406-p413
            11. 设备事件
                    p413
            12.触摸与手势事件
                p417
####    内存和性能
         内存中的对象越多，性能越差，其次必须实现指定所有事件处理程序而导致的DOM访问次数，会影响交互
         就绪时间
         1 事件委托
            利用了事件冒泡，指定一个事件处理程序管理某一类型的所有事件
         2 移除事件处理程序
            浏览器代码与支持页面交互的JavaScript代码之间的连接越多，页面越慢，可以通过事件委托技术限制建立
            的链接数量，在不需要时移除事件处理程序
            将处理程序赋值为null即移除
####    模拟事件
            可以在document对象上使用createEvent()方法创建对象，这个方法接收一个参数，即表示要创建的事件
            类型的字符串
            DOM2中这些字符串都是使用英文复数形式
                UIEvents
                MouseEvents
                MutationEvents:变动事件
                HTMLEvents: 一般事件 没有对应的DOM3事件
                DOM3中以上三个都变成了单数
            创建event对象之后还需要使用与事件有关的信息进行初始化，每种类型的event对象都有一个特殊的方法
            传入合适的数据即可初始化
            最后一步是触发事件
            dispatchEvent(),参数为要触发事件的event对象
            示例p425
                
                
    
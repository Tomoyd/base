# 表单脚本
    1. 表单的基础知识
        在HTML中，<form>元素表示
        在JS中，表单对应的是HTMLFormElement类型继承了HTMLElement
        有自己的属性和方法:
        acceptCharset:服务器能够处理的字符集，等价于HTML中的accept-charset特性
        action:接受请求的URL，等价于HTML中的action特性
        elements:表单中所有控件的集合
        enctype:请求的编码类型，等价于HTML的enctype特性
        length:表单中控件的数量
        method:要发送的HTTP请求类型
        name:
        reset():将所有表单域重置为默认值
        submit():提交表单
        target: 用于发送请求和接收响应的窗口名称，等价于HTML的target特性
        取得表单元素的方式
            1.通过id方式
            2.通过document.forms[formName]
            3.通过document.forms[formIndex]
        1.1 提交表单
            <!--通用提交表单按钮-->
            <input type="submit" value="Submit Form">
            <!-- 自定义提交按钮 -->
            <button type="submit"> Submit Form</button>
            <!-- 图像按钮 -->
            <input type="image" src="graphic.gif">
        上述，在相应表单控件拥有焦点的情况下，按下回车就可以提交该表单，textarea回车会换行，
        没有提交按钮就不会提交表单    
        浏览器在请求发送给服务器之前会触发submit事件
        
        不触发事件，提交表单，可以利用表单对象的submit()方法
        
        1.2 重置表单
            单击重置按钮时
            <!--通用重置按钮-->
            <input type="reset" value="Reset Form">
            
            <!--自定义重置按钮-->
            <button type="reset"> Reset Form</button>
            所有表单字段都会恢复到页面刚加载完毕时的初始值
            
            当点击重置按钮重置时，会触发reset事件
            也可以用表单元素的reset()方法进行重置，它会触发reset事件
        1.3 表单字段
            原生DOM方法访问表单元素
                每个表单元素都有elements属性
                该属性是表单中所有表单元素(字段)的集合,这个elements集合是个有序列表
                每个表单字段在elements集合中的顺序，与他们出现在标记中的顺序相同
                可以通过位置和name特性来访问它
                如果有多个表单控件都在使用一个name，那么就会返回以该那么命名的一个NodeList
                    这种情况下用位置访问会得到第一个元素
            1. 共有的表单字段属性
                除了<fieldset>元素之外，所有的表单字段都拥有一组属性
                <input>类型可以表示多种，有些属性只适用于某些字段
                表单字段共有的有：
                    disabled:布尔值，表示当前字段是否被禁用
                    form:指向当前字段所属表单的指针;只读
                    name:当前字段的名称
                    readOnly:布尔值，表示当前字段是否只读
                    tabIndex:表示当前字段的切换序号
                    type:当前字段的类型：如 checkbox
                    value:当前字段将被提交给服务器的值
                    
                    除了form属性其他都是可以更改的
                    
            2 共有的表单字段方法
                每个表单字段都有两个方法
                    focus():将浏览器的焦点设置到表单字段，即激活表单字段
                        HTML5为表单字段新增一个autofocus属性，只要设置这个属性，就能将焦点移动到相应字段
                    blur():与focus相反
            3. 共有的表单字段事件
                blur:   当前字段获得焦点时触发
                change: 对于<input><textarea>元素，在他们失去焦点且value值改变时触发，对于
                        select元素，在其选项改变时触发
                focus:  当前字段获得焦点时触发
        2 文本框脚本
               在HTML中有两种方式表现文本框，使用input 元素表示单行文本框
               另一种是使用<textarea>的多行文本框
                
                <input> type特性设置为text 通过设置size特性可以指定文本框中能够显示的字符数
                value特性可以设置文本框的初始值，maxlength特性则用于指定文本框可以接收的最大字符数
                <textarea>始终会呈现为一个多行文本框，要指定文本框的大小，可以使用rows，cols特性
                其初始值必须要放在<textarea></textarea>之间
                不能在HTML中给textarea指定最大字符数
#### 选择框脚本
       <select>和<option>
       除了表单字段共有的属性外
       HTMLSelectElement提供下列属性和方法
       add(newOption,relOption):向控件中插入新<option>元素，其位置在相关项(relOption)之前
       multiple:布尔值表示是否支持多项选择，等价于HTML中的multiple特性
       options:控件中所有<option>元素的HTMLCollection
       remove(index):移除给定位置的选项
       selectedIndex:基于0的选中项的索引，如果没有选中项，值为-1.支持多项选择的控件只保存选中项的第一项的索引
       size:选择框中可见的行数;等价于
       
            
         
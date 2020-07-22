# HTML5脚本编程
 ####   1.使用跨文档消息传递
            cross-document messaging 有时候XDM，指的是来自不同域的页面间传递消息
            核心是postMessage()方法
            对于XDM而言，另一个地方是指<iframe>元素,或者由当前页面弹出的窗口
            iframe的contentWindow.postMessage()
            postMessage():方法接收两个参数，一条消息和一个表示消息接收方来自哪个域的字符串
            
            当XDM接收消息时，会触发window对象的message事件。是异步形式触发的,
            onmessage处理程序的事件对象包含以下三个方面的重要信息
            data:作为postMessage()第一个参数传入的字符串数据
            origin:发送消息的文档所在的域
            source:发送消息的文档的window对象的代理。
 ####   2.原生拖放
            2.1 拖放事件
                    拖动元素时:
                        1)dragstart 拖动开始会触发
                        2)drag  拖动中会触发
                        3)dragend   拖动停止时触发
                    拖动到有效的放置目标时
                        1)dragenter:只要有元素被拖动到放置目标时，就会触发
                        2)dragover:还在放置目标的范围内移动时
                        3)dragleave:如果元素被拖出放置目标时,触发
                        4)drop 如果元素被放到放置目标中
            2.2 自定义放置目标
                    重写dragenter和dragover事件的默认行为可以自定义放置目标
          
            2.3 dataTransfer对象
                    在拖放时实现数据交换，引入了dataTransfer对象
                    是事件对象的一个属性
                    用于从被拖动元素向放置目标传递字符串格式的数据
                    由于是事件对象的属性
                    只能在拖放事件的时间处理程序中访问dataTransfer对象
                    
                    主要有两个方法:
                    getData():
                                取得setData()保存的值
                                
                    setData():
                                第一个参数：字符串表示保存的数据类型，也是getData()方法唯一的参数
                    从dataTransfer对象取得数据时，在取URL数据时检测两个值，在取得文本数据时使用"Text"
                    var dataTransfer = event.dataTransfer
                    var url = dataTranfer.getData("url")||dataTransfer.getData("text/uri-list")
                    var text = dataTranfer.getData("Text")
            2.4 dropEffect与effectAllowed
                    dataTransfer对象的两个属性
                    dropEffect:被拖动的元素能够执行那种放置行为:以下值
                                "none":不能把拖动元素放置在这里
                                "move":把拖动元素移动到放置目标
                                "copy":应该把拖动的元素复制到放置目标
                                "link":放置目标时会打开拖动元素，拖动元素必须是一个链接，有URL
                    必须在ondragenter事件处理程序针对放置目标来设置
                    effectAllowed:
                        表示允许拖动元素的哪种dropEffect
                            "uninitialized":没有给被拖动元素设置任何放置行为
                            "none":被拖动的元素不能有任何行为
                            "copy":只允许值为"copy"的dropEffect
                            "link":
                            "move":
                            "copyLink":
                            "copyMove":
                            "linkMove":
                            "all":允许任意dropEffect
                            在ondragstart事件处理程序设置effectAllowed属性
            2.5 可拖动
                    默认情况下,图像，链接和文本是可以拖动：
                    文本只有在被选中的情况下才能拖动，而图像和链接在任何时候都可以拖动
                    让其他元素拖动也是可能的
                    draggable属性，表示是否可以拖动，如
                    <div draggable="true">....</div>
                    为了让fireFox支持可拖动属性，还必须添加一个ondragstart事件处理程序，并在dragTranfer对象中
                    保存一些信息
            2.6 其他成员
                HTML5规定dataTransfer对象还应该包含以下属性和方法
                addElement(element):为拖动操作添加一个元素
                clearData(format):清除以特定格式保存的数据
                setDragImage(element,x,y):指定一幅图像，当拖动发生时，显示光标在下方，
                三个参数分别是显示的HTML元素和光标在图像中的x，y坐标
                types:当前保存的数据类型:
 ####   3.媒体元素
            音频和视频 HTML5 新增了两个与媒体相关的标签 <audio><video>,以及用于实现常用功能的API，允许为
            媒体创建自定义的控件
            
            <video src="conference.mpg" id="myVideo">Video player not available</video>
            <audio src="song.mp3">Audio player not available</audio>
            指定多个时
            <!--嵌入视频-->
            <video id="myVideo">
                <source src="conference.webm" type="video/webm;codecs='vp8,vorbis'">
                 <source src="conference.ogv" type="video/ogv;codecs='vp8,vorbis'">
                <source src="conference.mpg">
                Video player not available
            </video>
            <!--嵌入音频-->
            <audio>
                <source src="song.ogg" type="audio/ogg"></source>
                <source src="song.mp3" type="audio/mpeg">
                Audio player not available
            </audio>
            3.1 属性
                两个元素的共用的属性
            3.2 事件
                 
            3.3 自定义媒体播放器
                    结合属性事件，以及媒体元素的play()和pause()方法
            3.4 检测编解码器的支持情况
                    两个媒体元素的canPlayType()方法，该方法接收一种格式/编码器字符串
                    返回probably "maybe"或"".空字符串是假值
            3.5 Audio类型
                原生的JS构造函数Audio，与Image相似，但是不必插入到文档中只要创建，并传入音频源文件即可
 ####   4.历史状态管理
            hashchange事件 更像history
            history.pushState()方法接收三个参数：状态对象，新状态的标题，可选的相对URL
            history.pushState()创建新的历史状态,按下后退会触发window对象的popstate事件，此事件对象
            有一个state属性包含着当初第一个参数传递给pushState()
            更新当前状态，可以用replaceState() 传入的参数与pushState前两个参数相同
            会重写当前状态
            
                       
    
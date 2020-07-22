#   错误处理与调试
        2.1 try-catch语句
            语法如下:
            try{
            
            }catch(error){
            
            }
            良好的错误机制应该确保代码中只发生你自己抛出的错误
        2.3 错误事件
            任何没有通过try-catch处理的错误都会触发window对象的error事件
            onerror事件处理程序 不会创建event对象，
            可以接收三个参数，错误消息，错误所在的URL和行号
            window.onerror=function(message,url,line){
                return false //可以阻止浏览器报告错误的默认行为
            }
            图像也支持error事件，此时会返回一个以图像为目标的event对象
            
        常见的错误类型
            一般需要关注三种错误
            1.类型转换错误
            2.数据类型错误
            3.通信错误
        致命错误和非致命错误
            非致命错误:
            1)不影响用户的主要任务
            2)只影响页面的一部分
            3)可以恢复
            4)重复相同操作可以消除错误
            致命错误
            1)应用程序根本无法运行
            2)错误明显影响到了用户的主要操作
            3)会导致其他连带错误
####    调试技术
           1. 将消息记录到控制台
           console对象
               1.error(message)
               2.info(message)
               3.log(message)
               4.warn(message)
           2.将消息记录到页面
           3.抛出错误
          IE错误
            
            
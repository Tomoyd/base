####    4.跨域资源共享
            通过XHR实现Ajax通信的一个主要限制，来源于跨域安全策略
            默认情况下，XHR对象只能访问与包含它的页面位于同一个域中的资源。
            CORS(cross-origin Resource sharing) 跨域资源共享定义了在必须访问跨域资源时，
            浏览器与服务器应该如何沟通。其背后的思想是使用自定义的HTTP头部让浏览器与服务
            器进行沟通，从而决定请求或响应应该是成功还是应该失败
            
            例如:头部:
            Origin:http://www.nczonline.net
            如果服务器认为这个请求可以接收,就在Access-Control-Allow-Origin头部中回发相同的源详细
            (如果是公共资源：可以回发"*")
            例如:
            Access-Control-Allow-Origin:http://www.nczonline.net
            注意请求和响应都不包含cookie信息
            跨域的XHR对象有一些限制:
                1.不能使用setRequestHeather()设置自定义头部
                2.不能发送和接收cookie
                3.调用getAllResponseHeaders()总返回空字符串
            IE CORS实现  XDR
            
            4.3Preflighted Requests
                CORS通过一种透明服务器验证机制支持开发人员使用自定义的头部，get，post之外的方法
                以及不同类型的主体内容
                这种透明机制叫做Preflighted Requests
                当使用下列选项发送请求时
                1.Oringin:与简单的请求相同
                2.Access-Control-Request-Method:请求自身使用的方法
                3.Access-Control-Request-Headers:自定义头部信息，多个头部以逗号分隔，可选
                就会发送一个Preflight请求，这种请求使用OPTIONS方法
            服务器通过在响应中发送如下头部与浏览器进行沟通
                1.Access-Control-Allow-Origin：与简单的请求相同
                2.Access-Control-Allow-Methods:允许的方法，多个方法以逗号分隔
                3.Access-Control-Allow-Headers：允许的头部，多个头部以逗号分隔
                4.Access-Control-Max-Age:应该将这个Preflight请求缓存多长时间单位s
            带凭据的请求
                默认情况下，跨源请求不提供凭据(cookie,HTTP认证及客户端SSL证明等)。
                通过将withCredentials属性设置为true，可以指定某个请求应该发送凭据。
                如果服务器接受带凭据，会用下面的HTTP头部来响应
                Access-Control-Allow-Credentials:true
                如果发送的是带凭据的请求，但服务器的响应中没有包含这个头部，那么浏览器
                不会吧响应交给JavaScript,另外还可以在Preflight响应中发送这个HTTP头部，表示允许源发送带凭据的
                请求
            4.5 跨浏览器的CORS
                    检测XHR是否支持CORS的最简单方式，就是检查是否存在withCredentials属性在结合检测XDomainRequest
                    对象是否存在，就可以兼顾所有浏览器了
                    
                
            
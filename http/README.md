### 图解 http

#### web 网络基础

1989 年 3 月 http 诞生

1990 年 11 月 第一台 web 服务器与 web 浏览器

90 年 http1.0 草案讨论， 模糊不清 废弃

96/5 http1.0 标准公布

97/1 月 公布 1.1 目前主流协议版本

##### 网络基础 TCP/IP

TCP/IP 协议族的分层：应用层 传输层 网络层 数据链路层

应用层：决定向用户提供应用服务时通信的活动，
比如：各类服务 FTP(文件传输协议) DNS(域名系统) http 协议

传输层：
对应用生提供处于网络连接中两台计算机之间的数据传输(TCP UDP)

网络层

处理网络上的数据包，是网络传输中的最小单位，网络层的作用就是在众多选项中选择一条传输路线

链路层：处理网络连接的硬件部分，设备驱动，网卡，光纤

##### IP TCP 和 DNS

IP 协议的作用：把数据包传输给对方，
确保传送到对方那里，需要 IP 地址与 MAC 地址

IP 地址指明了节点被分配的地址
MAC 地址指网卡所属的固定地址
IP 地址可以和 MAC 地址进行匹配
IP 地址可以变换，MAC 地址基本不会更变

使用 ARP 协议凭借 MAC 地址进行通信

ARP 协议通过 IP 地址可以反查出对应的 MAC 地址

路由器路由选择，中转慢慢找到指定的地址

##### TCP

传输层 字节流服务 分隔成报文段
TCP 协议 可以最终确认是否送达到对方

为了准确的送到目标处，采用了 3 次握手
发送端发送带有 Syn 标志的数据包
接收端收到后回传一个带有 SYN/ACK 的数据表示确认
发送端发送一个 Ack 的数据包，表示确认

#### DNS 服务

域名服务是应用于应用层的服务

提供域名到 IP 地址之间的解析服务之间

通过域名找到 IP 地址 或者通过 Ip 地址找到域名

当输入 URL 时
进行 DNS 解析找到 IP 地址
http 生成相应的请求报文
TCP 将报文分割成报文段，序号进行数据传输
IP 找到地址后 路由器进行中转找到位置
TCP 把到达的报文段重组
http 对请求的内容进行处理

#### URL 与 URI

URL 统一资源定位符 资源的地址

URI 统一资源标识符 互联网的资源
URL 是 URI 的子集

URI 的格式

http://user:pass@www.example.com:80/dir/index.html?uid=1#chi

协议：http
用户登录信息：user：pass
服务器地址:www.example.com
端口：80
路径：dir/index.html
查询字符串：uid=1
片段标识符锚点：#ch1

#### http 协议

客户端与服务端之间的通信

客户端发送请求
请求报文 由请求方法， 请求 URI 协议版本，请求头 和内容实体构成
起始行：
GET / http/1.1

host:

响应返回
请求协议 状态码 状态码描述
响应头
空行
实体
http/1.1 200 Ok

headers
空行
body

http/1.1 支持的方法

GET
POST
HEAD
OPTIONS
DELETE
PUT
CONNECT
TRACE

#### 持久连接

每次 TCP 连接都要进行
三次握手，四次挥手

每次请求都造成 TCP 建立和断开 增加通信量的开销

http1.1 持久连接 keep-alive 1.1 中默认都是持久连接

##### 管线化

持久连接解决了 TCP 重复建立断开的消耗，当请求仍然需要等待响应后才能发送下一个请求
管线化技术后可以不必等待即可发送下一个请求
可以进行多个请求并发而不需要等待上一个请求完成才能发送

### Cookie

服务端发送 set-cookie 的首部字段

客户端 后面请求会带 Cookie 信息

### HTTP 信息

http 报文
请求：

1. 报文首部
   请求行 ：请求方法 请求 URI http 协议版本
   请求首部字段
   通用首部字段
   实体首部字段
   其他
2. 空行 CR+LR
3. 报文主体
   状态行 协议版本 状态码 原因描述
   响应首部字段
   通用首部字段
   实体首部字段
   其他
   报文(原始数据) 实体(可以是编码后的报文)

##### 压缩

1. gzip
2. compress
3. deflate
4. identity 不进行编码

Content-Type 指定内容类型
Content-Range 获取部分内容 响应码 206

### 内容协商

Accept
Accept-Charset
Accept-Language
Accept-Encoding
Content-Language
根据 编码语言 返回不同的内容
服务器 客户端 服务器和客户端

#### HTTP 状态码

1. 2xx
   200 OK 正常返回
   204 No Content 正常返回没有内容
   206 Partial 返回一部分 请求头通常会有 Content-Range
2. 3xx 重定向
   301 永久重定向 书签需要重新保存
   302 临时重定向
   303 see other 与 302 类似 303 需要希望 GET 请求才行
   304 not Modified 通常用缓存 不会返回任何主题
   (请求中 if-Match if-Modified-Since if-None-Match if-Range if-Unmodified-Since)
   307 临时重定向，和 302 相似，并且按照标准不会从 POST 变成 GET
3. 4xx
   400 请求报文有错
   401 Unauthorized 没有权限
   403 Forbidden 表示拒绝 不允许访问，不给理由
   404 Not Found 服务器找不到该资源
4. 5xx
   500 Internal Server Error 内部处理出错了
   503 Service Unavailable 服务不可访问， 正忙

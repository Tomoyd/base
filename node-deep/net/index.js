/**
 * Socket
 *
 * TCP 传输控制协议
 * UDP 用户数据报协议
 *
 * TCP 面向连接的协议 三次握手
 * 1) client 向server 发sync->
 * server接收sync 回复client一个sync ack ->
 * client接收到sync_ack 并发给server一个ack 连接建成
 * UDP 不需要建立
 * 2) TCP 可靠 UDP不可靠
 * TCP丢包会自动上传，UDP不会
 * 3)TCP 有序 UDP无序
 *  TCP在传输过程中可能会乱序，TCP会对其进行重新排序，UDP不会
 *
 * Socket抽象 是对TCP/IP协议族的一种封装，是应用层与TCP/IP协议族通信的中间软件抽象层
 *
 * 利用ip地址端口和协议表示网络的进程
 *
 * Socket 起源于Unix Unix/Linux 基本哲学之一就是一切皆是文件
 * 都可以用打开->读写文件-关闭文件模式进行操作
 * 因此socket也可以被处理为一种特殊的文件
 */

/**
 * TCP服务端实例
 *
 */

const net = require("net");

const HOST = "127.0.0.1";
const PORT = 3000;
const server = net.createServer();

server.listen(PORT, HOST);
console.log(`server startup http://${HOST}:${PORT}`);

server.on("connection", (socket) => {
  console.log("sock", socket.remoteAddress + ":" + socket.remotePort);
  socket.write("hello I'm server");
  socket.on("data", (data) => {
    console.log("data", data.toString());
  });
});

/**
 * 加密
 *  1) SSL (Secure Sockets Layer)  安全套接字层，定义了对网络发出的数据进行加密的格式和规则
 *
 * 服务器data->加密->发送->接收->ssl解密-data客户端
 * 客户端data->ssl加密->发送-接收->ssl解密->data服务器
 *
 *  2) OpenSSl 是在程序上对SSL标准的一个实现
 *      - libcrypto
 *      - libssl
 *      -openssl 命令行工具
 *
 * nodejs 是参与openSSl进行加密的 其相关的TLS https 服务器模块和Crypto加密模块都是
 * 通过C++在底层调用OpenSSL
 *
 * OpenSSL 实现了对称加密
 * AES(128) DES(64) Blowfish(64) CAST(64) IDEA(64) RC2(64) RC5(64)
 * 非对称加密
 * DH RSA DSA EC
 *
 * 以及一些摘要
 *  MD2 MD5 SHA MDC2 RIPEMD DSS
 * 其中一些信息摘要采用哈希算法的加密方式，也意味着这种加密是单向的不能反向解密，多用于安全口令，如密码登录
 * 最常用的是MD5 和SHA
 * SHA1，MD5通过查表大法已经不单向
 *
 * 使用非对称加密会消耗性能，对称加密又不能在网络传输，两者结合一起使用，ssl/tsl就是这样做的
 */

/**
 * TLS HTTPS 服务器
 * 想要建立Node.js TLS 服务器 需要使用tls 模块
 *
 * 需要签名证书
 *  客户端在自己的内存内部存储了一些公认机构的权威证书认证机构，CA
 * 通过在CA中查找，来批判服务端发送的签名证书的签名机构，以此来判断是否可可信
 */

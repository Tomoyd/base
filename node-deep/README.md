### 深入 nodejs

Node 四大部分

- Node 标准库：如我们常用的 path，http， fs，buffer 等
- Node Bindings ： 绑定 JS 与 C++的桥梁，封裝了 V8 与 Libuv 的细节，向标准库提供基础的服务
- V8 引擎：Google 开发的 JavaScript 引擎提供 JavaScript 运行环境
- Libuv 专门为 nodejs 开发的封装库，提供跨平台的异步 I/O 能力
- C-ares：提供异步处理 DNS 相关能力
- https_parser,openSSL zLib:提供 http 解析 ssl，数据压缩等能力

### 异步

异步解决高速设备等待慢设备及访问等待的问题

### Libuv

node 是将事件驱动的 I/O 模型与 JS 结合，使得 JS 可以离开浏览器环境执行，
libev 只能在 Unix 下运行，随着 Node 的流行，Window 事件机制是 IOCP，linux 的 epoll，OSX 的 Kqueue
libuv 是根据平台决定使用 libev ，epool Kqueue，events pots IOCP 的抽象
libuv 是一个跨平台的 I/O 异步事件驱动

Libuv 包括 网络和文件 DNS Ops User code 等组成
对于网络是跨平台的，根据平台不同反驳使用 epoll Kqueue 和 events ports
文件 I/O 使用的 thread pool

### V8

JS 引擎的关键路径：源代码->抽象语法树->字节码-JIT->本地代码

V8 直接略过字节码通过抽象语法树直接生成本地执行代码

句柄，作用域 上下文环境

##### Handle 概念

在 V8 中 值和对象存在 V8 的 Heap 中，内存分配都是在 heap 中进行分配的，失去引用的对象将被 V8 的 GC 调
并强其占用的内存分配给其他对象，handle 是对 Heap 中对象的引用，V8 GC 会对 Handle 进行管理，当失去引用时，对象值所占的内存将被清除

#### Scope 作用域

相当于，能引用句柄的空间， 当一个作用域释放时，只作用于这个作用域的 handle 也会被统一释放掉，而不是一个一个释放句柄

handleScope ContextScope

#### Context 概念

上下文环境，运行环境

#### GC （垃圾回收）

标记清除法，标记其代表的指针或数据

执行遍历引用->标记活对象-> 对未标记的进行垃圾清理

## C++和 JS

JS 调用 C++

V8 包装 C++类和函数 使 JS 可以识别调用

## 事件循环

任务队列，单线程，顺序执行

## 异常捕获与 domain

try catch 模式无法捕获异步中的异常，因此可以通过
process.on("uncaughtException") 去捕获，但是会脱离上下文

因此 domain 模块捕获异步回调周的异常（废除）
对于非预期的可以让当前超时，停止服务，之后重启

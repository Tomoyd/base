/**
 * Stream 流
 *
 * 流模块的基本操作 pipe
 */

/**
 * 对于大文件，如果用文件读取完之后才进行返回，会消耗大量内存，造成用户连接缓慢的问题
 *
 * req res都是流对象，意味着可以使用流的方式进行返回
 */
const http = require("http");

const fs = require("fs");
const { Readable, Writable } = require("stream");
function startUp() {
  const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(__dirname + "/test.html");

    stream.on("data", (chunk) => {
      res.write(chunk);
    });

    const rs = new Readable();
    setTimeout(() => {
      rs.push("HELLO");
      rs.push(null);
      rs.pipe(res);
    }, 5000);
  });

  server.listen(8000, () => {
    console.log("http://localhost:8000");
  });
}
// startUp();
/**
 * 流模块基础
 *
 * Readable流
 * Writable流
 * Duplex(双工)流
 * Transform(操作被写入数据然后被读出结果)
 *
 * 无论哪种都会使用pipe方法实现输入输出,pipe 返回的是一个可读流
 * src.pipe(dst)
 *
 * src.pipe(a).pipe(b)
 */

/**
 * readable流
 * 可读流
 * 可以将可读流的数据传送大一个writable transform 和duplex流中
 */

function readableTest() {
  const rs = new Readable();
  rs.push("beep");

  rs.push("bool \n");
  rs.push(null);

  rs.pipe(process.stdout);

  setTimeout(() => {
    const rs2 = new Readable();
    console.log("setTimeout", 123434445);

    rs2.push("hello");
    rs2.push(null);
    rs2.pipe(process.stdout);
  }, 3000);

  process.stdout.on("error", process.exit);
}
// readableTest();

/**
 * 可写流
 *
 * write(chunk)
 * _write 即可
 *
 * 向一个writable中写数据可以执行
 * write
 *
 * 结束
 * end
 *
 */

function wsTest() {
  const ws = new Writable();

  ws._write = (chunk, enc, next) => {
    console.log("chunk", chunk, chunk.toString());
    next();
  };

  process.stdin.pipe(ws);
}

wsTest();

/**
 * Duplex 双工流 可读可写
 * 首先继承了Readable 然后变量Writable原型方法赋值到Duplex的原型上
 */

/**
 * transform流
 * 一种输出由输入转换计算后得的双工流
 * 既可读又可写但不保存数据，只负责流经过他的数据
 *
 */

/**
 * 流对数据进行切分并通过管道组合
 */

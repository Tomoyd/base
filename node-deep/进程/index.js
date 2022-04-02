/**
 *  child_process
 * 子进程是一个非常重要的模块，
 * Node js通过child_process 模块可以在程序中直接创建子进程，并使用主进程与子进程实现通信
 *
 * 1) 创建子进程
 *  spawn 启动子进程
 *  exec 启动子进程来执行命令
 *  execFile 启动一个子进程来执行可执行文件
 *  fork与spawn类似 不同的是创建只需指定js模块即可
 *
 */

const cp = require("child_process");
cp.spawn("node", ["work.js"]);
cp.exec("node work.js", function (err, stdout, stderr) {
  console.log("exec");
});
cp.execFile("node work.js", function (err, stdout, stderr) {
  console.log("execFile");
});
cp.fork("work.js");

/**
 * cluster
 * Nodejs是单线程的，单独的进程无法充分利用多核，
 * cluster 让Nodejs开发web服务时 充分利用多核机器
 *
 * cluster 模块封装创建子进程，进程间通信，服务负载均衡
 *
 * 有两类进程：master进程和worker进程
 *
 * master进程是主控进程 负载worker进程
 * worker进程是子进程
 */

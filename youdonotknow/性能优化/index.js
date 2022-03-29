// @ts-ignore
const worker = new Worker('./work.js');

worker.addEventListener('message', (ev) => {
	console.log('ev', ev);
});

// @ts-ignore
worker.postMessage('hello world');

var shared = new SharedWorker('shared.js').port;
// this will trigger the on connect event on the webworker
// this will also start the worker IF this is the first call!

// recieve message from worker
shared.addEventListener('message', (message) => {
	console.log('index', message);
});
shared.postMessage('index');
shared.start();

// send a mesasge to the worker

/**
 * 向量计算
 * SIMD  单指令多数据
 * 
 * ams
 */
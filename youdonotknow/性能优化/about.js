// @ts-nocheck

var worker = new SharedWorker('shared.js');

worker.port.addEventListener('message', (message) => {
	console.log('about', message);
});
// worker.port.postMessage(['I have a nice message for all']);
worker.port.postMessage('about');
worker.port.start();

function add() {
	worker.port.postMessage(Date.now());
}

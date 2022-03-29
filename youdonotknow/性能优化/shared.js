// @ts-nocheck
const allPorts = [];
onconnect = function (e) {
	var port = e.ports[0];
	port.start();
	allPorts.push(port);
	port.onmessage = function (e) {
		allPorts.forEach((p) => {
			p.postMessage('Result>>>>: ' + e.data + allPorts.length);
		});
	};
};

const ws = new WebSocket('ws://');
ws.binaryType = 'arraybuffer';
ws.onclose = function (ev) {
  console.log('onclose', ev);
};

ws.onopen = (ev) => {
  console.log('onopen');
};

ws.onerror = (ev) => {
  console.log('onerror', ev);
};

ws.onmessage = (ev) => {
  console.log('onmessage', ev);
  ws.close();
};
const buffer = new ArrayBuffer(128);

ws.send(buffer);
ws.send(new Uint8Array(buffer));
ws.send('');
ws.send(new Blob([buffer]));

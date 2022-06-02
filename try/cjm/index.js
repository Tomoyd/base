const m = require('./module');
console.log('m', m);

m.addA();
const b = require('./module');
console.log('m', m);
console.log('m', b.a);

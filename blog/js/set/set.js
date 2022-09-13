const aSet = new Set(['1', 2, 3, 4, 'o']);

aSet.add('22');
console.log(aSet.keys());
console.log(aSet.values());
console.log(aSet.delete('1'));
console.log(aSet.entries());
aSet.forEach((v1, v2, set) => {
  console.log(v1, v2);
});

console.log(aSet.has('1'));
console.log(aSet.clear());

const weakSet = new WeakSet();
const oKey = {};
weakSet.add(oKey);
weakSet.delete(oKey);
weakSet.has(oKey);

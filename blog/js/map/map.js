/**
 *@type {Map<string,number|string>}
 */

const map = new Map([
  ['age', 18],
  ['name', 'tomo'],
]);

map.set('sex', '男');
map.forEach((item, key, t) => {
  console.log('item,key', item, key);
});
const entries = map.entries();
console.log(entries);

const keys = map.keys();
const values = map.values();
console.log(map.has('name'));
console.log('map.keys()', map.keys());
console.log('map.values()', map.values());

map.delete('age');
map.clear();
console.log(map.size);

const objKey = {};
const weakMap = new WeakMap([[objKey, 123]]);

console.log(weakMap.set(objKey, '456'));
console.log(weakMap.get(objKey));
console.log(weakMap.delete(objKey));
console.log(weakMap.has(objKey));

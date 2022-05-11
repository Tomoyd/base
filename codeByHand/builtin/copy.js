function shallowCopy(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  const newObj = obj instanceof Array ? [] : {};

  Object.keys(obj).forEach((k) => {
    newObj[key] = obj[k];
  });
  return newObj;
}

// let newO = Object.assign([], [1, 2, 3]);
// console.log('newO', newO);

// deepCopy
function deepCopy(obj, mapObjLoop = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) return obj;
  if (mapObjLoop.get(obj)) {
    return obj;
  }

  const constructor = obj.constructor;
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    return new constructor(obj);
  }

  const newObj = obj instanceof Array ? [] : {};

  mapObjLoop.set(obj, true);

  Object.keys(obj).forEach((k) => {
    newObj[k] = deepCopy(obj[k], mapObjLoop);
  });

  return newObj;
}

const a = {
  name: '1233',
  sayHello: () => {
    console.log('111', 111);
  },
  obj: [1, 2, 3, { data: new Date() }],
};
let b = deepCopy(a);

console.log('b', b, b.obj === a.obj);

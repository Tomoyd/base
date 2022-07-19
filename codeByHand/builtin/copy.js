// @ts-nocheck

function shallowCopy(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  const newObj = obj instanceof Array ? [] : {};

  Object.keys(obj).forEach((k) => {
    newObj[k] = obj[k];
  });
  return newObj;
}

/*

深度copy需要使用递归，对象和数组 进行遍历
对正则和Date类型进行处理
 */
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

function create(proto, propertyObject) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null.');
  }

  function fNOP() {}
  fNOP.prototype = proto;

  const obj = new fNOP();

  if (propertyObject) {
    Object.defineProperties(obj, propertyObject);
  }

  if (!proto) {
    obj.__proto__ = null;
  }

  return obj;
}

function newThis(Constructor) {
  const newObj = {};
  newObj.__proto__ = Constructor.prototype;
  const res = Constructor.apply(newObj, Array.prototype.slice(arguments, 1));

  return typeof res === 'object' ? res : newObj;
}

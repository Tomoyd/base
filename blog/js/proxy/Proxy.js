// @ts-ignore
const user = {
  name: '小明',
};
// @ts-ignore
const p = new Proxy(user, {
  get(target, key) {
    console.log('进行拦截访问操作');
    return target[key];
  },
});

function sayHello() {
  this.name = 'Tomo';
  //   return 'hello';
}

const proxySayHello = new Proxy(sayHello, {
  //   apply(target, thisArg, args) {
  //     return target(...args).toUpperCase();
  //   },
  construct(target, argArray, newTarget) {
    const neT = Reflect.construct(target, argArray, newTarget);
    neT.age = 18;
    return neT;
  },
});

// console.log(proxySayHello());
console.log(new proxySayHello());

// Reflect.preventExtensions();

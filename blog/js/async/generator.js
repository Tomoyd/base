// 生成器函数
// next 消耗执行到 yield所在语句的右边，停止，左边的赋值属于下一次的next消耗执行
function* generator() {
  // 第一个next 执行yield左边语句，且yield右边赋值给a的行为属于第二个next部分
  const a = yield 1;
  //   第二个next执行，从  const a=next入参，到yield 2 左边的语句
  console.log(a, 'this is a');
  const b = yield 2;
  //   第三个next执行，从 const b =next入参，到yield 3语句
  console.log(b, 'this is b');
  const c = yield 3;
  //   第四个next执行，从 const c = next入参"c"，到return over 左边的语句
  console.log(c, 'this is c');
  return 'over';
}

const gen = generator();

console.log('gen.next()', gen.next());
console.log('gen.next()', gen.next('a')); // next 从上次的yield语句之后开始执行到这次整个yield语句为止
console.log('gen.next()', gen.next('b'));
console.log('gen.next()', gen.next('c'));

// async await polyfill 就是一种generator消耗yield实现

//  结合generator函数，写一个消耗函数，每次从yield中拿出Promise ，等上一个执行完之后再执行下一个yield
function co(fn) {
  return new Promise((resolve, reject) => {
    let gen = fn();
    function next(param) {
      try {
        const { done, value } = gen.next(param);
        if (done) {
          resolve(value);
          return;
        }
        Promise.resolve(value).then((val) => next(val));
      } catch (err) {
        reject(err);
      }
    }
    next();
  });
}

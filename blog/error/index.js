window.onunhandledrejection = (event) => {
  event.preventDefault();
  console.log('unhandledrejection', event.reason);
};

//  先开始没有处理，后面得到了处理
window.addEventListener('rejectionhandled', (event) => {
  console.log('rejectionhandled', event.reason);
});
window.addEventListener(
  'error',
  (event) => {
    if (event instanceof ErrorEvent) {
      return;
    }
    console.log('资源加载错误', event);
    // @ts-ignore
    const paths = event.composedPath();
    function getTagName(current) {
      return current.localName || current.nodeName || 'window';
    }
    console.log(
      'error',
      paths
        .slice(1)
        .reduce(
          (pre, current) => pre + '>>>' + getTagName(current),
          getTagName(paths[0])
        )
    );
  },
  true
);

window.addEventListener(
  'error',
  (event) => {
    console.log('非资源加载非promise错误', event);
  },
  false
);

/**
 * 运行时错误
 * 1. Error 基本类
 * 2. EvalError： eval调用发生的异常,新版本的不会抛出eval，而是抛出语法或者其他错误
 * 3. RangeError： 数组越界发生的异常，精度越界问题
 * 4. ReferenceError：引用没有被定义的变量时发生的异常,没定义就使用
 * 5. SyntaxError：语法异常
 * 6. TypeError： 值的类型进行不能做的操作时发生的异常
 * 7. URIError：使用URI处理函数产生的异常
 */
// decodeURI('%%%'); // URI错误 无法解析%
// [1].sayHello(); // TypeError

// const y1 = 1;
// console.log('y', y1 + y); // ReferenceError

// eval("1+'"); // 语法错误 SyntaxError
const errorArr = [1, 2, 3];

// const i = Array(-1); //RangeError: Invalid array length
// console.log('i', i);

/*
    加载错误可以用 .addEventListener(
  'error',true) 可以捕获静态资源加载问题
 */

function sayError() {
  Array(-1);
}
setTimeout(() => {
  sayError();
}, 1000);

// promise 错误
/*

  promise 错误会被最近的rejection处理函数，catch 捕获到，没有捕获的，则有
  unhandledrejection 可以监听到没有捕获处理的
  rejectionhandled  可以监听到后面才捕获的，这个肯定会触发unhandledrejection
*/

function generateRejectedPromise(isEventuallyHandled) {
  // Create a promise which immediately rejects with a given reason.
  var rejectedPromise = Promise.reject(
    'Error at ' + new Date().toLocaleTimeString()
  );

  if (isEventuallyHandled) {
    setTimeout(() => {
      rejectedPromise.catch(() => {});
    }, 1);
  }
}

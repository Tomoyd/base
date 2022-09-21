/**
 * 1. 构造函数参数为回调函数，这个回调将实例中resolve，reject传入
 * 2. resolve，reject的执行会触发then注册的函数的执行，并将resolve，reject的值传给then注册的函数
 * 2. then方法中返回一个实例promise2，并注册onFilled onRejected的函数，
 * 3. 且当PENDING阶段完成时，将onFilled onReject 执行后的结果通过promise2的resolve，reject传递给promise2 的then
 * 4. then中接收到处理函数的返回值，需要对值为thenable时递归进行处理
 * 5. 当是普通值可以直接resolve;
 */
const PENDING = 'PENDING';
const FILLED = 'FILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(cb) {
    this.value = null;
    this.reason = null;
    this.status = PENDING;
    this.onFilled = [];
    this.onReject = [];

    const resolve = (value) => {
      if (this.status !== PENDING) return;
      this.status = FILLED;
      this.value = value;

      setTimeout(() => {
        this.onFilled.forEach((f) => f(value));
      });
    };

    const reject = (reason) => {
      if (this.status !== PENDING) {
        return;
      }
      this.status = REJECTED;
      this.reason = reason;
      this.onReject.forEach((f) => f(reason));
    };

    try {
      cb(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFilledCallback, onRejectCallback) {
    const promise = new MyPromise((resolve, reject) => {
      if (this.status === FILLED) {
        setTimeout(() => {
          const res = onFilledCallback(this.value);
          // 上一个then执行完，触发下一个then
          resolveReturnPromise(promise, res, resolve, reject);
        }, 0);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          const res = onRejectCallback(this.value);
          resolveReturnPromise(promise, res, resolve, reject);
        }, 0);
      }

      if (this.status === PENDING) {
        this.onReject.push(() => {
          setTimeout(() => {
            const res = onRejectCallback(this.value);
            resolveReturnPromise(promise, res, resolve, reject);
          }, 0);
        });
        // 注册then回调
        this.onFilled.push(() => {
          setTimeout(() => {
            const res = onFilledCallback(this.value);
            // 上一个then执行完，触发下一个then
            resolveReturnPromise(promise, res, resolve, reject);
          }, 0);
        });
      }
    });
    return promise;
  }
}

const resolveReturnPromise = (promise, ret, resolve, reject) => {
  if (promise === ret) {
    reject(new TypeError('重复引用'));
  }
  let cancel = false;

  if (typeof ret === 'function' || typeof ret === 'object') {
    const then = ret.then;
    if (typeof then === 'function') {
      then.call(
        ret,
        (y) => {
          if (cancel) return;
          cancel = true;
          resolveReturnPromise(promise, y, resolve, reject);
        },
        (r) => {
          if (cancel) return;
          cancel = true;
          reject(r);
        }
      );
      return;
    }
  }

  resolve(ret);
};

new MyPromise((resolve) => {
  resolve('123');
})
  .then((res) => {
    console.log('res', res);
    return new Promise((resolve) => {
      resolve('999');
    });
  })
  .then((res) => {
    console.log(11110000, res);
  });

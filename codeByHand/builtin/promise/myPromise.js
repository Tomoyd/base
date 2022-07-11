// @ts-nocheck
class MyPromise {
  static PENDING = 'PENDING';
  static REJECTED = 'REJECTED';
  static FULFILLED = 'FULFILLED';
  constructor(cb) {
    this.status = MyPromise.PENDING;
    this.onFulfilledList = [];
    this.onRejectedList = [];
    this.value = null;
    try {
      cb(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value) {
    setTimeout(() => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.FULFILLED;
        this.value = value;
        this.onFulfilledList.forEach((fn) => {
          fn();
        });
      }
    });
  }
  reject(reason) {
    setTimeout(() => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.FULFILLED;
        this.value = reason;
        this.onRejectedList.forEach((fn) => {
          fn();
        });
      }
    });
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {};
    onRejected = typeof onRejected === 'function' ? onRejected : () => {};
    const promise = new MyPromise((resolve, reject) => {
      if (this.status === MyPromise.PENDING) {
        this.onFulfilledList.push(() => {
          const res = onFulfilled(this.value);
          resolvePromiseValue(promise, res, resolve, reject);
        });
        this.onRejectedList.push(() => {
          const res = onRejected(this.value);
          resolvePromiseValue(promise, res, resolve, reject);
        });
      }

      if (this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          const res = onFulfilled(this.value);
          resolvePromiseValue(promise, res, resolve, reject);
        });
      }
      if (this.status === MyPromise.FULFILLED) {
        setTimeout(() => {
          const res = onRejected(this.value);
          resolvePromiseValue(promise, res, resolve, reject);
        });
      }
    });
    return promise;
  }
}

function resolvePromiseValue(promise, res, resolve, reject) {
  let done = false;
  if (promise === res) {
    return;
  }
  if (res instanceof MyPromise) {
    res.then(
      (value) => {
        if (done) {
          return;
        }
        done = true;
        resolve(res, value, resolve, reject);
      },
      (reason) => {
        if (done) {
          return;
        }
        done = true;
        reject(reason);
      }
    );
  } else {
    resolve(res);
  }
}

const promise = new MyPromise((resolve, reject) => {
  reject(new Error('hello'));
  resolve('112');
});

promise.then(
  (value) => {
    console.log('value', value);
  },
  (reason) => console.log('reason', reason)
);
console.log('777', 777);

export { MyPromise };

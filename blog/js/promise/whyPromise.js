/**
 * 假如我们要异步获取一个处理结果，我们可以使用回调
 * 例如
 */

// import { resolve } from 'path';

function getUser(name, cb) {
  const users = [
    {
      name: '小明',
      age: 18,
    },
    {
      name: '小华',
      age: 16,
    },
  ];
  setTimeout(() => {
    cb(users.find((item) => item.name === name));
  });
}

getUser('小明', (user) => {
  console.log('user.age', user.age);
});

function getUserP(name = '') {
  const users = [
    {
      name: '小明',
      age: 18,
    },
    {
      name: '小华',
      age: 16,
    },
  ];
  return new Promise((resolve, reject) => {
    const item = users.find((item) => item.name === name);
    if (!item) {
      reject(item);
    }
    console.log('1233', 1233);
    resolve(Promise.resolve(item));
  });
}

getUserP('小明')
  .then(
    (value1) => {
      console.log('value1', value1);
      return Promise.reject(value1);
    },
    (err1) => {
      console.log('err1', err1);
    }
  )
  .then(
    (value2) => {
      console.log('value2', value2);
    },
    (err2) => {
      console.log('err2', err2);
      return 111;
    }
  )
  .catch((reason) => {
    console.log('reason', reason);
  })
  .finally(() => {
    console.log('finally');
  });

Promise.allSettled([Promise.resolve(1), Promise.reject(2)]).then((val) => {
  console.log('allSettle', val);
});

global.value = 'window';
const bar = {
  value: 'bar',
};

const foo = {
  value: 'foo',
  sayHello: function () {
    // console.log('this', this);
    console.log('this.value', this.value);
  },
};

bar.sayHello = foo.sayHello;

// bar.sayHello();

// 第二版
function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function () {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}

function curry(fn, length) {
  console.log('fn', fn.length);
  length = length || fn.length;

  var slice = Array.prototype.slice;

  return function () {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

const arr = [1, 4, 2, 3, 1, 5];

console.log(
  arr.sort((a, b) => {
    // <0 表示应该排在前面
    // >0 表示应该排在后面
    console.log('a,b', a, b);
    return a - b;
  }),
);

const a = {
  name: 'a',
};

const b = Object.create(a);

console.log(Object.keys([1, 234]));

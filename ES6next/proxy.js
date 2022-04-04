function test() {
  const obj = { a: 1 };

  const handler = {
    /**
     *
     * @param {*} target obj
     * @param {*} key property
     * @param {*} context pobj
     */
    get(target, key, context) {
      console.log('accessing', key);
      return Reflect.get(target, key, context);
    },
  };

  const pobj = new Proxy(obj, handler);

  pobj.key;

  pobj.a = 123;

  console.log('obj', obj);
}

/**
 * 代理可以拦截几乎所有的对象操作
 * 代理的局限性
 * typeof
 * String 操作
 * 表达式式操作 obj+""
 * === 操作 无法捕获
 */

/**
 * 代理在前，代理在后
 *
 * 代理成为代码交互的主要对象，而实际目标对象保持隐藏/被保护的状态
 *
 * 对对象的访问性增强
 */

function test2() {
  const message = [];

  const handler = {
    get(target, key) {
      if (typeof target[key] === 'string') {
        return target[key].replace(/[^\w]/g, '');
      }

      return target[key];
    },

    set(target, key, val) {
      if (typeof val === 'string') {
        val = val.toLowerCase();
        if (target.indexOf(val) === -1) {
          target.push(val);
        }
      }
      return true;
    },
  };

  const messageProxy = new Proxy(message, handler);

  messageProxy.push('   hello  ', 42, 'woRld', 'World');
  messageProxy.forEach((val) => {
    console.log('val', val);
  });

  console.log('message', message);
}

test2();

/**
 * 代理在后，将代理放到主对象的[[Prototype]] 中
 *
 */

function test3() {
  const handles = {
    get(target, key, context) {
      return function () {
        context.speak(key + '!');
      };
    },
  };

  const catchall = new Proxy({}, handles);

  const greeter = {
    speak(who = 'someone') {
      console.log('hello', who);
    },
  };

  Object.setPrototypeOf(greeter, catchall);

  greeter.speak(); // 访问对象
  greeter.speak('world'); // 访问对象
  greeter.everyone(); // 访问原型
}

test3();

/**
 * vue3 响应式原理
 *
 * ref 使用 getter setter
 *
 * reactive 使用 proxy
 */

function genEffect(target, key) {
  return () => {
    console.log('key', target[key]);
  };
}

function getSubscribeTracks(target, key) {
  key = `__${key}__`;
  let effects = target[key];

  if (effects) {
    return effects;
  }
  target[key] = [];
  return target[key];
}

function track(target, key) {
  const effects = getSubscribeTracks(target, key);

  if (effects.length > 0) {
    return;
  }
  effects.push(genEffect(target, key));
}

function trigger(target, key) {
  const effects = getSubscribeTracks(target, key);

  setTimeout(() => {
    effects.forEach((effects) => {
      effects();
    });
  }, 0);
}

function ref(value) {
  const refObj = {
    get value() {
      // 收集依赖

      track(refObj, 'value');
      return value;
    },
    set value(val) {
      // 触发依赖
      trigger(refObj, 'value');
      value = val;
    },
  };

  return refObj;
}

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key);
      return target[key];
    },
    set(target, key, value) {
      trigger(target, key);
      target[key] = value;
    },
  });
}

function testRef() {
  const counter = ref(1);
  counter.value;
  counter.value = 12;
}

testRef();

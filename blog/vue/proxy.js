// @ts-ignore
const createReactive = function (
  target,
  isShallow = false,
  isReadOnly = false
) {
  return new Proxy(target, {
    get(target, key, receiver) {
      if (key === 'raw') {
        return target;
      }
      track(target, key);
      const res = Reflect.get(target, key, receiver);
      if (isShallow) {
        return res;
      }
      if (typeof res === 'object' && res !== null) {
        return isReadOnly ? readOnly(res) : reactive(res);
      }
      return res;
    },
    set(target, key, value, receiver) {
      if (isReadOnly) {
        console.error(`${key}是只读的`);
        return false;
      }
      const operateType =
        Array.isArray(target) && (Number(key) > target.length ? 'ADD' : 'SET');
      const res = Reflect.set(target, key, value, receiver);

      trigger(target, key, operateType);
      return res;
    },
  });
};

// @ts-ignore
const reactive = function (target) {
  return createReactive(target);
};

const shallowReactive = function (target) {
  return createReactive(target, true);
};

const shallowReadOnly = function (target) {
  return createReactive(target, true, true);
};
const readOnly = function (target) {
  return createReactive(target, false, true);
};

// 存储所有依赖的全局变量
const store = new WeakMap();
// 标识当前effect的函数
let activeFn;
// 将Fn进行放入栈中
const effectStack = [];
/**
 目的是在get是将注册的effect函数收集到对于的store.get(target).get(key)上的Set中
 1. 通过target 获取到对应所有该对象depsMap 如果没有，设置新建
 2. 通过depsMap 得到对应key修改的depsSet 如果没有设置新建
 3. 将新的依赖副作用函数收集到Set
 */
function track(target, key) {
  if (!activeFn) return;
  let storeTarget = store.get(target);
  if (!storeTarget) {
    store.set(target, (storeTarget = new Map()));
  }

  let deps = storeTarget.get(key);
  if (!deps) {
    storeTarget.set(key, (deps = new Set()));
  }

  deps.add(activeFn);
}
/*
目的：通过target key 找到对应的依赖集合，遍历执行
因为当前的effects正在执行，所有trigger时要对当前的依赖里的effect进行排除，以免死循环
 */
function trigger(target, key, operateType, newValue) {
  let depsMap = store.get(target);
  if (!depsMap) return;
  let deps = depsMap.get(key);

  if (!deps) {
    return;
  }

  const notActiveEffects = new Set();
  deps.forEach((fn) => {
    if (fn !== activeFn) {
      notActiveEffects.add(fn);
    }
  });
  /*
    当是数组且length小于 length操作时触发，通知所有小于等于新length数组key对应的副作用
   */
  if (Array.isArray(target) && key === 'length') {
    depsMap.forEach((effects, key) => {
      if (key >= newValue) {
        effects.forEach((fn) => {
          if (fn !== activeFn) {
            notActiveEffects.add(fn);
          }
        });
      }
    });
  }
  if (Array.isArray(target) && operateType === 'ADD') {
    // 与length相关的复函数也要咨询
    const lengthEffects = deps.get('length');
    lengthEffects &&
      lengthEffects.forEach((fn) => {
        if (fn !== activeFn) {
          lengthEffects.add(fn);
        }
      });
  }
  notActiveEffects.forEach((run) => {
    if (run.options.scheduler) {
      run.options.scheduler(run);
      return;
    }
    run();
  });
}

function effect(fn, options) {
  const eFn = () => {
    activeFn = eFn;
    effectStack.push(fn);
    const val = fn();
    effectStack.pop();
    activeFn = effectStack.pop();
    return val;
  };
  eFn.options = options;
  if (options.lazy) {
    return eFn;
  }
  eFn();
}
/*
1. computed 返回一个响应式的数据，具有value属性且只读
2. 能懒执行，需要将执行结果记录下来
3. trigger到响应的依赖时才重新计算结果执行

*/
function computed(fn) {
  let val,
    isRun = true;
  const eFn = effect(fn, {
    lazy: true,
    scheduler: () => {
      isRun = true;
      // 将computed返回值 进行响应式处理
      trigger(obj, 'value');
    },
  });

  const obj = {
    get value() {
      if (isRun) {
        val = eFn();
        isRun = false;
      }
      //  将computed返回值 进行响应式处理
      track(obj, 'value');

      return val;
    },
  };
  return obj;
}

/*
  watch 方法

  1. 监听响应式数据，getter进行注册
  2. 每次响应式数据修改时，要进行新旧数据传值给回调
  3. 能配置是否立即执行
*/

function bindData(value, readData = new Set()) {
  if (typeof value !== 'object' || value === null || readData.has(value)) {
    return;
  }
  readData.add(value);

  for (const key of value) {
    bindData(value[key], readData);
  }
  return value;
}

function watch(source, fn, options = {}) {
  let getter = typeof source === 'function' ? source : () => bindData(source);
  let newVal, oldVal;
  const run = () => {
    newVal = effectFn();
    fn(newVal, oldVal);
    oldVal = newVal;
  };
  const effectFn = effect(() => getter(), { lazy: true, scheduler: run });
  if (options.immediate) {
    run();
  } else {
    oldVal = effectFn();
  }
}

/* ref 对于原生字面量操作，进行一个包裹对象，返回一个reactive */

function ref(val) {
  const wrapperObj = {
    value: val,
  };
  Object.defineProperty(wrapperObj, '_isRef', {
    value: true,
  });
  return reactive(wrapperObj);
}

/*  响应丢失 */

// 使用解构时
const obj = reactive({ name: 1, value: 2 });
//  取出来值，赋给对应的属性，在修改新的 newObj.value 自然不会触发proxy
const newObj = {
  name: obj.name, // 丢失响应
  value: {
    get value() {
      return obj.value; // 保存响应
    },
  },
};

// 解决方式可以使用 get 里取取obj响应的参数

// toRefs 解决响应式问题,
/*
  对原理的响应数据responseObj，进行key 遍历，每个key 进行一个set get访问该响应数据，
  底层还是以响应式数据访问方式 get(){ return responseObj[key]}
  以此达到响应式数据的目的
*/
function toRefs(obj) {
  const res = {};
  for (let key in obj) {
    res[key] = toRef(obj, key);
  }
  return res;
}

function toRef(obj, key) {
  const wrapper = {
    get value() {
      return obj[key];
    },
    set value(val) {
      obj[key] = val;
    },
  };

  Object.defineProperty(wrapper, '_isRef', {
    value: true,
  });
  return wrapper;
}
const p = reactive({ name: 123 });
effect(() => {
  p.name = p.name + 3;
  console.log(p.name);
});

// 防抖，触发高频事件在x秒后只会执行一次，如果在x秒内再次触发，则重新计时

function debounce(fn, gap = 50) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(timer);
      return fn(...args);
    }, gap);
  };
}

// 防抖，立即触发，如果在n秒内再次触发事件，则重新计时

function debounce2(fn, gap) {
  let start = Date.now();
  return function (...args) {
    if (Date.now() - start > gap) {
      start = Date.now();
      return fn(...args);
    }
    start = Date.now();
  };
}

// 使用timer
function debounceT(fn, gap) {
  let timer = null;
  return function (...args) {
    let result = null;
    if (!timer) {
      result = fn(...args);
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
    }, gap);

    return result;
  };
}

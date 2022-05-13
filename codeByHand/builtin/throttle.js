// 每N秒执行一次，当大于N秒时，重新计时

function throttle(fn, gap) {
  let start = 0;
  return function (...args) {
    const now = Date.now();
    if (now - start > gap) {
      start = now;
      fn(...args);
    }
  };
}

function mySetInterval(fn, delay) {
  function inside() {
    fn();
    setTimeout(inside, delay);
  }
  setTimeout(inside, delay);
}

// let i = 0;
// console.log('first', new Date().getSeconds());
// setInterval(async () => {
//   if (i === 7) {
//     i = 0;
//   }
//   const res = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(i);
//     }, i * 1000);
//   });
//   console.log('res', res);
//   console.log('Interval', i++, new Date().getSeconds());
// }, 1000);

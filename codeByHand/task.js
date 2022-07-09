const div = document.createElement('div');
const myEvent = new Event('sayHello');

div.addEventListener(
  'sayHello',
  () => {
    console.log('hello11111');
  },
  false
);
div.dispatchEvent(myEvent); // 与原生事件不同，dispatchEvent是同步触发

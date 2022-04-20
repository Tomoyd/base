// var 声明 当前作用域如果已经有这个标识符则用当前作用域的变量标识符
function testArg(a) {
  console.log('a', a);
  var a = 1;
  console.log('a', a);
}

let j = 0;

{
  setTimeout(() => {
    console.log('>>>', j);
  });
}

console.log('j+1', (j = 2));

function testConst() {
  function replaceReducer() {
    console.log('store', store);
    return store;
  }

  const store = { name: 133 };

  return {
    replaceReducer,
  };
}
// store 形成了闭包
testConst().replaceReducer();

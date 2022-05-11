function unique5(arr) {
  return arr.filters((item, index) => {
    return arr.indexOf(item) === index;
  });
}

const unique6 = (arr) => [...new Set(arr)];

function parseParam(url) {
  const params = {};
  const paramStr = url.split('?')[1];
  if (!paramStr) {
    return params;
  }

  const paramsArr = paramStr.split('&').filter((item) => item.includes('='));
  paramsArr.forEach((param) => {
    let [key, value] = param.split('=');
    value = decodeURIComponent(value);
    value = /^\d+$/.test(value) ? Number.parseFloat(value) : value;
    if (key in params) {
      params[key] = [].concat(params[key], value);
    } else {
      params[key] = value;
    }
  });
  return params;
}
console.log(
  parseParam('https://www.baidu.com/s?ie=UTF-8&wd=12308&wd=hello%208&7'),
);

// @ts-nocheck
// 获取到通过? 分隔后的第二个元素
// 对元素进行& 分隔并将不包含= 的进行过滤
// 对值进行decodeURIComponent
// 对值为数字进行parseFloat
// 如果重复的要进行数组拼接 concat

const parseUrlParams = (url = '') => {
  if (typeof url !== 'string') {
    throw new Error('url 只能为字符串');
  }

  const result = {};

  const queryStr = url.split('?')[1];
  if (!queryStr) {
    return result;
  }

  const paramsArr = queryStr.split('&').filter((item) => item.includes('='));

  paramsArr.forEach((str) => {
    let [key, value] = str.split('=');
    value = decodeURIComponent(value);

    value = /^\d+$/.test(value) ? parseFloat(value) : value;
    result[key] =
      result[key] !== undefined ? [].concat(result[key], value) : value;
  });

  return result;
};
console.log(
  parseUrlParams('https://www.baidu.com/s?ie=UTF-8&wd=1230&wd=hello%208&7&i')
);

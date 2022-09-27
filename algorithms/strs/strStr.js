/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let end = needle.length;
  let start = 0;
  for (let i = 0; i < haystack.length; i++) {
    start = 0;
    for (let j = i; j < i + end; j++) {
      if (haystack[j] === needle[start]) {
        start++;
        continue;
      }
      break;
    }

    if (start === end) {
      return i;
    }
  }

  return -1;
};

const res = strStr('mississippi', 'issip');
console.log(res);

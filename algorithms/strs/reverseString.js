/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let temp;
  let len = s.length - 1;
  for (let i = 0; i < len - i; i++) {
    temp = s[i];
    s[i] = s[len - i];
    s[len - i] = temp;
  }
};

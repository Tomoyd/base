/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let r = 0;
  let start = false;
  const max = 2 ** 31 - 1;
  const min = -(max + 1);
  let sign = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      start = true;
      r = r * 10 + Number(s[i]);
      continue;
    } else if (!start) {
      if (sign > 0) {
        return 0;
      }
      if (s[i] === '-') {
        sign = 1;
        continue;
      }
      if (s[i] === '+') {
        sign = 2;
        continue;
      }
      if (s[i] === ' ') {
        continue;
      }

      return 0;
    }
    break;
  }
  r = sign % 2 === 0 ? r : -r;
  if (r > max) {
    return max;
  }
  if (r < min) {
    return min;
  }
  return r;
};
const res = myAtoi('  +42555');
console.log(res);

export {};

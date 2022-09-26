/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  Array.prototype.forEach.call(s, (char, index) => {
    map.set(char, index);
  });

  for (let i = 0; i < s.length; i++) {
    if (map.size === 0) {
      return -1;
    }
    if (map.get(s[i]) === i) {
      return i;
    }
    if (map.has(s[i])) {
      map.delete(s[i]);
    }
  }
  return -1;
};

const r = firstUniqChar('loveleetcode');
console.log(r);

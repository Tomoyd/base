var intersect = function (nums1 = [], nums2 = []) {
  const res = [];
  const map = new Map();
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  nums1.forEach((item) => {
    map.set(item, 0);
  });
  nums1.forEach((item) => {
    map.set(item, map.get(item) + 1);
  });

  let count;
  if (nums2.length > 100 && nums2.length / nums1.length >= 2) {
    let len = nums1.length;
    for (let num of nums2) {
      if (res.length > len) {
        return res;
      }
      count = map.get(num);
      if (count) {
        res.push(num);
        map.set(num, count - 1);
      }
    }
  } else {
    nums2.forEach((num) => {
      count = map.get(num);
      if (count) {
        res.push(num);
        map.set(num, count - 1);
      }
    });
  }

  return res;
};

let nums1 = [3, 1, 2, 1],
  nums2 = [1, 1];
const r = intersect(nums1, nums2);
console.log(r);

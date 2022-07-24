const permutations = (arr = []) => {
  if (arr.length === 1) {
    return [arr];
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const newArr = arr.filter((_, index) => {
      return index !== i;
    });
    permutations(newArr)?.forEach((item) => {
      result.push([arr[i], ...item]);
    });
  }
  return result;
};
// console.log(permutations([1, 2, 3]));
const permutationsII = (arr = []) => {
  if (arr.length === 1) {
    return [arr];
  }
  const result = [];
  const uniqueMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (uniqueMap[arr[i]]) {
      continue;
    }
    const newArr = arr.filter((_, index) => {
      return index !== i;
    });
    permutationsII(newArr)?.forEach((item) => {
      result.push([arr[i], ...item]);
    });
    uniqueMap[arr[i]] = true;
  }
  return result;
};

console.log('permutationsII', permutationsII([1, 1, 2]));

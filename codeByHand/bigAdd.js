function add(a = '', b) {
  if (!a || !b) {
    return NaN;
  }

  let result = [];

  let jin = 0;

  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let bigIndex = aIndex > bIndex ? aIndex : bIndex;

  while (bigIndex >= 0) {
    const r = Number(b[bIndex--] || 0) + Number(a[aIndex--] || 0) + jin;

    if (bigIndex === 0) {
      result.unshift(r);
      return result.join('');
    }

    if (r >= 10) {
      jin = 1;
      result.unshift(r - 10);
    } else {
      jin = 0;
      result.unshift(r);
    }

    bigIndex--;
  }
}

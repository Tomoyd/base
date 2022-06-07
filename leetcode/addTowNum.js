var addTwoNumbers = function (l1, l2) {
  let s1 = l1;
  let s2 = l2;
  let next = 0;
  let result;
  let temp = 0;
  let end;
  while (l1 && l2) {
    temp = l1.val + (l2.val || 0) + next;
    l1.val = l2.val = temp % 10;
    next = ~~(temp / 10);
    end = l2;
    l1 = l1.next;
    l2 = l2.next;
  }

  result = l1 ? s1 : s2;
  let current = l1 ? l1 : l2;

  while (next > 0 && current) {
    temp = (current.val || 0) + next;
    current.val = temp % 10;
    end = current;
    current = current.next;
    next = ~~(temp / 10);
  }

  if (next === 0) {
    return result;
  }
  end.next = { val: next, next: null };
  return result;
};

let l1 = [5];
let l2 = [5];
const r = addTwoNumbers(genListNodes(l1), genListNodes(l2));
console.log('r', JSON.stringify(r));

function genListNodes(arr = []) {
  let n = null;
  let or = (n = { val: 0, next: null });

  arr.forEach((e, i) => {
    if (i === 0) {
      n.val = e;
    } else {
      n = n.next = { val: e, next: null };
    }
  });
  console.log('or', or);
  return or;
}

export { addTwoNumbers };

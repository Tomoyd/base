/*
左边之前的
需要关注left为1时的问题,leftPre为null情况


1. 位置变换之后的头尾调换的问题 
2. leftNode.next 指向 rightNode.next
3. leftNode 的pre.next 指向 rightNode, 如果leftPre为null 则rightNode为头部

*/
var reverseBetween = function (head, left, right) {
  if (left === right) {
    return head;
  }
  let leftNode = head;
  let rightNode = head;
  let leftPre = left > 1 ? head : null;
  let i = 1;
  while (i < left - 1) {
    leftPre = leftPre.next;
    i++;
  }

  if (leftPre) {
    i++;
    leftNode = leftPre.next;
  }

  rightNode = leftNode;

  while (i < right) {
    rightNode.next.pre = rightNode;
    rightNode = rightNode.next;
    i++;
  }

  leftNode.next = rightNode.next || null;

  if (!leftPre) {
    head = rightNode;
  } else {
    leftPre.next = rightNode;
  }

  while (rightNode.pre) {
    rightNode.next = rightNode.pre;
    delete rightNode.pre;
    rightNode = rightNode.next;
  }

  return head;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
        },
      },
    },
  },
};

var reverseBetween = function (head, left, right) {
  if (left === right) {
    return head;
  }

  let arr = [];
  let leftPre = left > 1 ? head : null;
  let i = 1;
  while (i < left - 1) {
    leftPre = leftPre.next;
    i++;
  }

  if (leftPre) {
    i++;
    arr[0] = leftPre.next;
  } else {
    arr[0] = head;
  }

  while (i < right) {
    arr.push(arr[i - left].next);
    i++;
  }
  i = arr.length - 1;

  arr[0].next = arr[i].next;

  if (leftPre) {
    leftPre.next = arr[i];
  } else {
    head = arr[i];
  }

  while (i > 0) {
    arr[i].next = arr[i - 1];
    i--;
  }

  return head;
};
// const r = reverseBetween(head, 1, 2);
// console.log(JSON.stringify(r));

var reverseBetween = function (head, left, right) {
  if (left === right) {
    return head;
  }
  let pre = head;
  let next;
  let nn;
  let i = 1;
  let leftPre = left > 1 ? head : null;
  while (i < left - 1) {
    leftPre = leftPre.next;
    i++;
  }

  if (leftPre) {
    pre = leftPre.next;
    i++;
  }
  next = pre.next;
  while (i < right) {
    nn = next.next;
    next.next = pre;
    pre = next;
    next = nn;
    i++;
  }

  if (leftPre) {
    leftPre.next.next = next;
    leftPre.next = pre;
  } else {
    head.next = next;
    head = pre;
  }

  return head;
};

const r = reverseBetween(head, 2, 4);
console.log(JSON.stringify(r));

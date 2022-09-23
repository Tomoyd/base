const reverseLinkedList = (head) => {
  while (head.next) {
    head.next.pre = head;
    head = head.next;
  }
  let preNode = head;
  while (preNode) {
    preNode.next = preNode.pre;
    delete preNode.pre;
    preNode = preNode.next;
  }
  return head;
};

const listNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      // next: {
      //   val: 4,
      // },
    },
  },
};

// console.log('111', JSON.stringify(reverseLinkedList(listNode)));
// 数组双端法也是可以的
function reorderList(head) {
  const start = head;
  let origin = start;
  let i = 0;
  let j = 0;
  while (head.next) {
    head.next.pre = head;
    head = head.next;
    i++;
  }
  i = ~~(i / 2);
  let oriNext;
  while (j < i) {
    j++;
    oriNext = origin.next;
    delete oriNext.pre;
    origin.next = head;
    head = head.pre;
    delete origin.next.pre;
    origin.next.next = oriNext;
    origin = oriNext;
  }
  delete head.next;
  delete head.pre;
  return start;
}
// console.log('first2', JSON.stringify(reorderList(listNode)));

function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

function middleNode(head) {
  let i = 0;
  let start = head;
  while (start.next) {
    start = start.next;
    i++;
  }
  const middle = ~~((i + 1) / 2);
  start = head;
  i = 0;
  while (i < middle) {
    start = start.next;
    i++;
  }
  return start;
}

console.log(middleNode(listNode));

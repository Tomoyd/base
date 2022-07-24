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
      next: {
        val: 4,
      },
    },
  },
};

// console.log('111', JSON.stringify(reverseLinkedList(listNode)));

const reverseLinkedListII = (head, m, n) => {
  let i = 0;

  let mPre;
  let nNext;

  while (i < m) {
    mPre = head;
    head = head.next;
    i++;
  }

  while (head.next && i < n) {
    head.next.pre = head;
    head = head.next;
    i++;
  }

  nNext = head.next;
  let preNode = head;
  while (preNode.pre) {
    preNode.next = preNode.pre;
    delete preNode.pre;
    preNode = preNode.next;
  }

  if (mPre) {
    mPre.next = head;
  }

  preNode.next = nNext;

  return mPre;
};

console.log('first', JSON.stringify(reverseLinkedListII(listNode, 1, 3)));

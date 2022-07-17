/**
 * 队列
 * 先进先出 FIFO
 * 单调队列
 *
 * 广度遍历，分层遍历
 *
 * 1. 读取当前数据
 * 2. 当前数据执行，将下一步的任务加入队列
 *
 */

const testTree = {
  left: {
    left: {
      val: 1,
    },
    right: {
      val: 3,
    },
    val: 2,
  },
  right: {
    val: 3,
  },
};

function breadthTraverseTree(tree) {
  const currList = [tree.left, tree.right];
  const result = [];
  while (currList.length > 0) {
    const currTask = currList.shift();
    result.push(currTask.val);
    if (currTask.left) {
      currList.push(currTask.left);
    }
    if (currTask.right) {
      currList.push(currTask.right);
    }
  }
  return result;
}

console.log(breadthTraverseTree(testTree));

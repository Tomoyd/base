// @ts-nocheck
// 栈
/**
 * 栈运用场景
 * 1. 编程代码中，函数执行
 * 2. 操作系统中从用户态到内核态寄存器的保存
 * 3. 网络消息的处理
 */
/**
 * 常用的场景
 * 1. 配对与消除
 * 如左括号(与有括号)匹配
 * 大鱼吃小鱼   （匹配)
 * 找出第一个符合要求的(匹配)
 */

// 左右括号匹配 不匹配则进行返回false,压栈内容相同时，则可进行计数法

const isMatchedBracket = (bracketStr = '') => {
  if (bracketStr.length % 2) {
    return false;
  }
  if (bracketStr.length === 0) {
    return true;
  }
  const leftBracket = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < bracketStr.length; i++) {
    if ('({['.includes(bracketStr[i])) {
      leftBracket.push(bracketStr[i]);
    } else if (')}]'.includes(bracketStr[i])) {
      if (map[bracketStr[i]] !== leftBracket.pop()) {
        return false;
      }
    } else {
      return false;
    }
  }

  return leftBracket.length === 0;
};

//
const isMatchedBracketByNum = (bracketStr = '') => {
  if (bracketStr.length % 2) {
    return false;
  }
  let leftBracket = 0;

  for (let i = 0; i < bracketStr.length; i++) {
    if (bracketStr[i] === '(') {
      leftBracket += 1;
    } else {
      if (leftBracket <= 0) {
        return false;
      }
      leftBracket -= 1;
    }
  }

  return leftBracket === 0;
};
console.log('isMatchedBracket', isMatchedBracketByNum('(()()())(((()()())))'));
console.log('isMatchedBracket', isMatchedBracket('[{({}()())}]'));
//

//  大鱼吃小鱼，方向一致则进行push，不一致进行比较

const bigEatSmall = (sizes, dirs) => {
  const fishStack = [0];
  const length = sizes.length;
  const equal = [];
  let needPush = true;
  for (let i = 1; i < length; i++) {
    needPush = true;
    while (
      dirs[i] != dirs[fishStack[fishStack.length - 1]] &&
      fishStack.length
    ) {
      if (sizes[i] < sizes[fishStack[fishStack.length - 1]]) {
        needPush = false;
        break;
      } else if (sizes[i] > sizes[fishStack[fishStack.length - 1]]) {
        fishStack.pop();
      } else {
        equal.push(fishStack.pop());
      }
    }

    if (needPush) {
      fishStack.push(i);
    }

    while (equal.length) {
      fishStack.push(equal.pop());
    }
  }

  return fishStack.length;
};

console.log(bigEatSmall([1, 4, 3, 3, 5, 5, 1], [1, 1, 1, 1, 0, 0]));

// 找出左边最小的左边位置否则为-1

const smallestRight = (arr) => {
  const indexs = [0];
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    while (indexs.length && arr[i] < arr[indexs[indexs.length - 1]]) {
      result[indexs.pop()] = i;
    }
    indexs.push(i);
  }
  while (indexs.length) {
    result[indexs.pop()] = -1;
  }
  return result;
};

console.log(smallestRight([5, 2, 3, 4, 1, 2, 3]));

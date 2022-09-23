function isInParent(parent, p) {
  if (!parent) {
    return false;
  }
  if (parent === p || parent.left === p || parent.right === p) {
    return true;
  }
  return isInParent(parent.left, p) || isInParent(parent.right, p);
}

function findNearestCommonParent(root, p1, p2) {
  if (root === null || p1 === null || p2 === null) {
    return root;
  }
  if (root === p1 || root === p2) {
    return root;
  }
  const p1InInLeft = isInParent(root.left, p1);
  const p2InRight = isInParent(root.right, p2);
  if (p1InInLeft === p2InRight) {
    return root;
  }

  if (p1InInLeft) {
    return findNearestCommonParent(root.left, p1, p2);
  }

  return findNearestCommonParent(root.right, p1, p2);
}

let p1 = {
  left: {
    value: 2,
  },
  right: {
    value: 3,
  },
};
let p2 = {
  left: {
    value: 222,
  },
  right: p1,
  // right: {
  //   value: 3,
  //   left: p1,
  // },
};
const root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 6,
      right: p2,
    },
  },
  right: {
    value: 7,

    left: {
      value: 8,
    },
    right: {
      value: 9,
    },
  },
};

const common = findNearestCommonParent(root, p1, p2);
console.log(common);
function findNearCommonParent2(root, p1, p2) {
  const p1Parents = getParentsArray(root, p1);
  const p2Parents = getParentsArray(root, p2);

  for (let i = 1; i < p1Parents.length; i++) {
    if (p1Parents[i] !== p2Parents[i]) {
      return p1Parents[i - 1];
    }
  }
  return p1Parents[p1Parents.length - 1];
}

function getParentsArray(parent, p) {
  let parents = [];
  const dfs = (node, p2) => {
    if (!node) {
      return;
    }

    parents.push(node);
    if (node === p2) {
      return;
    }
    if (isInParent(node.left, p)) {
      dfs(node.left, p2);
      return;
    }
    dfs(node.right, p2);
  };
  dfs(parent, p);
  return parents;
}
// const common2 = findNearCommonParent2(root, root, root);
// console.log(common2);

// const getParenthesSets = (n) => {
//   const result = [];
//   if (n <= 0) {
//   }
//   if (n === 1) {
//     return ['()'];
//   }
//   function increamParenthese(str = '()') {
//     if (str.length === n * 2) {
//       result.push(str);
//       return str;
//     }
//     const tempResult = [];
//     tempResult.push('(' + str + ')');
//     if ('()' + str === str + '()') {
//       tempResult.push('()' + str);
//     } else {
//       tempResult.push('()' + str);
//       tempResult.push(str + '()');
//     }
//     tempResult.forEach((item) => increamParenthese(item));
//   }
//   increamParenthese();
//   return result;
// };

// const sets = getParenthesSets(0);
// console.log(sets);

function nearParent(root, p1, p2) {
  const queue = [root];

  const temp = [];
  let p1Number = 0;
  let p2Number = 0;
  let i = 1;
}

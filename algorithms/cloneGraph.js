class NodeG {
  constructor(val, arr = []) {}
  neighbors = [];
}
function cloneGraph(node) {
  const map = new Map();
  function dfs(n) {
    if (n === null) return node;
    if (map.get(n)) return map.get(n);
    const cloneNode = new NodeG(n.val, []);
    map.set(n, cloneNode);
    n.neighbors.forEach((ne) => {
      cloneNode.neighbors.push(dfs(ne));
    });
    return cloneNode;
  }
  return dfs(node);
}
function cloneGraphByBFS(node) {
  const map = new Map();

  function bfs(n) {
    const queue = [n];
    let cloneNode = new NodeG(n.val, []);
    map.set(n, cloneNode);
    while (queue.length) {
      const node = queue.shift();
      (node.neighbors || []).forEach((ne) => {
        if (!map.get(ne)) {
          queue.push(ne);
          map.set(ne, new NodeG(ne.val, []));
        }
        map.get(node).neighbors.push(map.get(ne));
      });
    }
    return map.get(n);
  }
  return bfs(node);
}

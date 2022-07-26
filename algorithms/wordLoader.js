var isSimilar = function (word1, word2) {
  let diff = 0;
  if (word1.length != word2.length) return false;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] == word2[i]) {
      continue;
    } else {
      diff++;
      if (diff >= 2) return false;
    }
  }
  return true;
};

function wordLadder(begin, end, arrList = []) {
  if (!arrList.includes(end)) {
    return 0;
  }
  const wordSet = new Set(arrList);
  const queue = [[begin, 1]];

  while (queue.length) {
    // @ts-ignore
    let [word, num] = queue.shift();
    if (word === end) return num;
    for (let str of wordSet) {
      if (isSimilar(word, str)) {
        queue.push([str, num + 1]);
        wordSet.delete(str);
      }
    }
  }
  return 0;
}
let beginWord = 'hit',
  endWord = 'cog',
  wordList = ['hot', 'dot', 'dog', 'lot', 'log'];

console.log(wordLadder(beginWord, endWord, wordList));

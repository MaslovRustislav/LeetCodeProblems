/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = [];
  const groupedAnagrams = new Map();
  strs.forEach((str) => {
    sortedWord = str.split("").sort().join("");
    if (groupedAnagrams.get(sortedWord)) {
      groupedAnagrams.set(sortedWord, [...groupedAnagrams.get(sortedWord), str]);
    } else {
      groupedAnagrams.set(sortedWord, [str]);
    }
  });
  for (let [, value] of groupedAnagrams) {
    result.push(value);
  }
  return result;
};
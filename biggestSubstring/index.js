/**
 * @param {string} s
 * @return {number}
 */
let subs = "";
let max = 0;
let i = 0;
let failureI = 0;
let counting;
var lengthOfLongestSubstring = function (s, i = 0, subs = "") {
  //   s.split("").forEach((c) => {
  console.log("i", i, s.length - 1, s, subs);
  if (s.length - 1 === i) {
    return max;
  }
  if (!subs.includes(s[i])) {
    if (subs.length > max) {
      max = subs.length;
    }
    i++;
    console.log("subs", subs);
    lengthOfLongestSubstring(s, i, subs.concat(s[i]));
  } else {
    if (subs.length > max) {
      max = subs.length;
    }
    i++;
    lengthOfLongestSubstring(s, i, "");
  }
  return max;
};

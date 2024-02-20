/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let subs = [];
  let max = 0;
  s.split("").forEach((c) => {
    if (!subs.includes(c)) {
      subs.push(c);
      if (subs.length > max) {
        max = subs.length;
      }
      console.log("subs top", subs);
    } else {
      if (subs.length > max) {
        max = subs.length;
      }
      console.log("subs", subs);
      subs = [];
      subs.push(c);
    }
  });
  console.log("subs", max);
  return max;
};

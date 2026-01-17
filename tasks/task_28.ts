/**
 * Find the Index of the First Occurrence in a String
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

function strStr(haystack: string, needle: string): number {
  let result = -1;
  let i = 0;
  let j = 0;

  while (i < haystack.length) {
    // console.log(i, haystack.charAt(i), j, needle.charAt(j));
    if (haystack.charAt(i) === needle.charAt(j)) {
      if (j === needle.length - 1) {
        return i - j;
      }
      j++;
    } else {
      i -= j;
      j = 0;
    }
    i++;
  }

  return result;
}

console.log(0, strStr("sadbutsad", "sad"));
console.log(-1, strStr("leetcode", "leeto"));
console.log(2, strStr("hello", "ll"));
console.log(4, strStr("mississippi", "issip"));
console.log(9, strStr("mississippi", "pi"));

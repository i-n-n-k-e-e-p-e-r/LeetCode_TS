import { randomString } from "../helpers";

// Given a string s, find the length of the longest substring without duplicate characters.
/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
*/
/**
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */
function lengthOfLongestSubstring(s: string): number {
  let length = 0;
  let buf: string[] = [];
  let leftIndex = 0;
  while (leftIndex < s.length) {
    const char = s[leftIndex] ?? "";
    if (buf.includes(char)) {
      length = Math.max(length, buf.length);
      leftIndex = leftIndex - buf.length + 1;
      buf = [];
    } else {
      buf.push(char);
      leftIndex++;
    }
  }
  return Math.max(length, buf.length);
}

function lengthOfLongestSubstringSet(s: string): number {
  let length = 0;
  let buf: Set<string> = new Set();
  let leftIndex = 0;
  while (leftIndex < s.length) {
    const char = s[leftIndex] ?? "";
    if (buf.has(char)) {
      length = Math.max(length, buf.size);
      leftIndex = leftIndex - buf.size + 1;
      buf.clear();
    } else {
      buf.add(char);
      leftIndex++;
    }
  }
  return Math.max(length, buf.size);
}

function lengthOfLongestSubstringMap(s: string): number {
  const last = new Map<number, number>();
  let start = 0;
  let best = 0;
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    const prev = last.get(code);
    if (prev !== undefined && prev >= start) start = prev + 1;
    last.set(code, i);
    const len = i - start + 1;
    if (len > best) best = len;
  }
  return best;
}

// generate 5 * 10^4 characters
const big = randomString(5 * 10 ** 4);

console.time("lengthOfLongestSubstring");
console.log(lengthOfLongestSubstring(big));
console.timeEnd("lengthOfLongestSubstring");
console.time("lengthOfLongestSubstringSet");
console.log(lengthOfLongestSubstringSet(big));
console.timeEnd("lengthOfLongestSubstringSet");
console.time("lengthOfLongestSubstringMap");
console.log(lengthOfLongestSubstringMap(big));
console.timeEnd("lengthOfLongestSubstringMap");

// test cases
// console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// console.log(lengthOfLongestSubstring("bbbbb")); // 1
// console.log(lengthOfLongestSubstring("pwwkew")); // 3
// console.log(lengthOfLongestSubstring("")); // 0
// console.log(lengthOfLongestSubstring(" ")); // 1
// console.log(lengthOfLongestSubstring("au")); // 2
// console.log(lengthOfLongestSubstring("dvdf")); // 3

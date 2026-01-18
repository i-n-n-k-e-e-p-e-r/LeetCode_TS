/**
 * First Unique Character in a String
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */

function firstUniqChar_VerySlow(s: string): number {
  for (let i = 0; i < s.length; i++) {
    if (s.split(s.charAt(i)).length === 2) {
      return i;
    }
  }
  return -1;
}

function firstUniqChar(s: string): number {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
      return i;
    }
  }
  return -1;
}

console.log(0, firstUniqChar("leetcode"));
console.log(2, firstUniqChar("loveleetcode"));
console.log(-1, firstUniqChar("aabb"));

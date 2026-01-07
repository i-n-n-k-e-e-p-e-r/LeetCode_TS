/**
 * Longest common prefix
 * https://leetcode.com/problems/longest-common-prefix/
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  strs.sort((a, b) => a.length - b.length);
  let fs = strs.shift() || "";
  const suffixArr: string[] = [];
  while (fs.length > 0) {
    suffixArr.push(fs);
    fs = fs.slice(0, -1);
  }

  for (const sfx of suffixArr) {
    let count: number = 0;
    for (const str of strs) {
      if (str.startsWith(sfx)) count++;
    }
    if (count === strs.length) return sfx;
  }

  return "";
}

console.log("fl", longestCommonPrefix(["flower", "flow", "flight"]));
console.log("", longestCommonPrefix(["dog", "racecar", "car"]));

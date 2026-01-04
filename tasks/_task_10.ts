/**
 * RegEx matching
 * https://leetcode.com/problems/regular-expression-matching/description/
 */

function getPatterns(p: string): { pattern: string; result: boolean }[] {
  const regPatterns: { pattern: string; result: boolean }[] = [];

  let i = 0;
  while (i < p.length) {
    if (p.charAt(i + 1) === "*") {
      if (p.charAt(i) === "*") {
        i += 2;
        continue;
      }
      regPatterns.push({
        pattern: `${p.charAt(i)}${p.charAt(i + 1)}`,
        result: false,
      });
      i += 2;
    } else {
      regPatterns.push({
        pattern: p.charAt(i),
        result: false,
      });
      i++;
    }
  }

  return regPatterns;
}

function isMatch(s: string, p: string): boolean {
  // return s.match(new RegExp(`^${p}$`)) !== null;
  // console.log(`isMatch called with s: "${s}", p: "${p}"`);
  if (p.length === 0) return s.length === 0;

  const first =
    s.length > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === ".");

  if (p.length >= 2 && p.charAt(1) === "*") {
    return (first && isMatch(s.slice(1), p)) || isMatch(s, p.slice(2));
  } else {
    return first && isMatch(s.slice(1), p.slice(1));
  }
}

console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "a*")); // true
console.log(isMatch("ab", "a*")); // false
console.log(isMatch("ab", ".*")); // true
console.log(isMatch("aab", "c*a*b")); // true
console.log(isMatch("abc", "a***abc")); // true
console.log(isMatch("ab", ".*c")); // false
console.log(isMatch("aaa", "a*a")); // true

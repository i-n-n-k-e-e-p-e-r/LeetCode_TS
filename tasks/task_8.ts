/**
 * 8. String to Integer (atoi)
 * https://leetcode.com/problems/string-to-integer-atoi/
 */

function myAtoi(s: string): number {
  const min = -2147483648;
  const max = 2147483647;

  const result = Number.parseInt(s, 10);

  if (min > result) return min;
  if (result > max) return max;
  if (Number.isNaN(result)) return 0;

  return result;
}

console.time("myAtoi");
console.log(myAtoi("     -043"));
console.log(myAtoi("4193 with words"));
// more than int32
console.log(myAtoi("91283472332"));
// less than int32
console.log(myAtoi("-91283472332"));
console.log(myAtoi("  -347d23 3s2 "));
console.timeEnd("myAtoi");

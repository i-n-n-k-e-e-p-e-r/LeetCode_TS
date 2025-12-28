import { generateRandomNumber } from "../helpers";

/**
 * @link https://leetcode.com/problems/reverse-integer/description/
 */

// better by memory
function reverse(x: number): number {
  if (x === 0) return 0;
  const negative: -1 | 1 = x < 0 ? -1 : 1;

  let result = 0;
  for (let i = Math.floor(Math.log10(Math.abs(x))) + 1; i >= 1; i--) {
    const v = (Math.abs(x) % 10) * Math.pow(10, i - 1);
    if (-2147483648 > result + v || result + v > 2147483647) {
      return 0;
    }
    result += v;
    x = Math.floor(Math.abs(x) / 10);
  }

  return result * negative;
}

// better by speed
function reverseStr(x: number): number {
  if (x === 0) return 0;
  const negative: -1 | 1 = x < 0 ? -1 : 1;
  const result =
    Number.parseInt(Math.abs(x).toString().split("").reverse().join("")) *
    negative;

  if (-2147483648 > result || result > 2147483647) {
    return 0;
  }
  return result;
}

// console.time("reverse");
// for (let i = 0; i < 1000000; i++) {
//   reverse(
//     generateRandomNumber(
//       Math.floor(Number.MAX_SAFE_INTEGER / 2),
//       Number.MAX_SAFE_INTEGER,
//     ),
//   );
// }

// Test cases
console.log(reverse(Number.MAX_SAFE_INTEGER)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(0)); // Output: 0
console.log(reverse(Number.MAX_SAFE_INTEGER)); // Output: 321
console.log(reverse(-12901700));
console.log(reverse(-2147483412));

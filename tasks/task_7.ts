import { generateRandomNumber } from "../helpers";

/**
 * @link https://leetcode.com/problems/reverse-integer/description/
 */
function reverse(x: number): number {
  return x;
}

console.time("reverse");
for (let i = 0; i < 1000000; i++) {
  reverse(
    generateRandomNumber(
      Math.floor(Number.MAX_SAFE_INTEGER / 2),
      Number.MAX_SAFE_INTEGER,
    ),
  );
}

// Test cases
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(0)); // Output: 0

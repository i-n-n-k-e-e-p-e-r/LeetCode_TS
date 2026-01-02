/**
 * Palindrome number
 * https://leetcode.com/problems/palindrome-number/description/
 */

function isPalindrome(n: number): boolean {
  const arr = n.toString().split("");
  for (
    let i = 0, j = arr.length - 1;
    i < Math.floor(arr.length / 2);
    i++, j--
  ) {
    if (arr[i] !== arr[j]) {
      return false;
    }
  }
  return true;
}

console.time("isPalindrome");
console.log(isPalindrome(1001)); // false
console.log(isPalindrome(-1)); // false
console.log(isPalindrome(-9)); // false
console.log(isPalindrome(11)); // true
console.log(isPalindrome(83)); // false
console.log(isPalindrome(55)); // true
console.log(isPalindrome(10)); // false
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(1234321)); // true
console.log(isPalindrome(12344321)); // true
console.log(isPalindrome(0)); // true
console.timeEnd("isPalindrome");

/**
 * Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 */

function isPalindrome_Slow(s: string): boolean {
  const isLetterOrNumber = (a: string) =>
    a.toLocaleLowerCase() !== a.toLocaleUpperCase() || !isNaN(parseInt(a));

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!isLetterOrNumber(s.charAt(left))) {
      left++;
      continue;
    }
    if (!isLetterOrNumber(s.charAt(right))) {
      right--;
      continue;
    }
    if (
      s.charAt(left).toLocaleLowerCase() === s.charAt(right).toLocaleLowerCase()
    ) {
      left++;
      right--;
      continue;
    } else {
      return false;
    }
  }

  return true;
}

function isPalindrome(s: string): boolean {
  const clean = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  return clean === clean.split("").reverse().join("");
}

console.log(true, isPalindrome("A man, a plan, a canal: Panama"));
console.log(false, isPalindrome("race a car"));
console.log(true, isPalindrome(" "));
console.log(false, isPalindrome("0P"));

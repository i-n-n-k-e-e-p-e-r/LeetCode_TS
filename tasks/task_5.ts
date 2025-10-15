import { randomString } from "../helpers";

/**
 * @link https://leetcode.com/problems/longest-palindromic-substring/description/
 */
function longestPalindrome(s: string): string {
    if (!s || s.length < 2) return s;
    let res: string = '';
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        while (right < s.length - 1 && s.charAt(right) === s.charAt(right + 1)) {
            right++;
        }
        while (left > 0 && right < s.length - 1 && s.charAt(left - 1) === s.charAt(right + 1)) {
            left--;
            right++;
        }
        if (right - left + 1 > res.length) {
            res = s.substring(left, right + 1);
        }
    }
    return res;
};

console.time('longestPalindrome');
for (let i = 0; i < 1000; i++) {
    longestPalindrome(randomString(1000));
}
console.timeEnd('longestPalindrome');

console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("ac")); // "a" or "c"
console.log(longestPalindrome("forgeeksskeegfor")); // "geeksskeeg"
console.log(longestPalindrome("abccba")); // "abccba"
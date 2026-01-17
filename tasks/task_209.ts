/**
 * Minimum Size Subarray Sum
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let result = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]!;
    while (sum >= target) {
      result = Math.min(result, right - left + 1);
      sum -= nums[left]!;
      left++;
    }
  }
  if (result === Number.MAX_SAFE_INTEGER) return 0;
  return result;
}

console.log(2, minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(1, minSubArrayLen(4, [1, 4, 4]));
console.log(0, minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));

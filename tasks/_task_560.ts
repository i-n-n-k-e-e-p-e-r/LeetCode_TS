/**
 * Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k/
 */

function subarraySum_TimeLimit(nums: number[], k: number): number {
  let result = 0;
  const sums = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    sums.set(i, nums[i]!);
    if (nums[i] === k) result++;
  }

  let windowLength = 1;
  while (windowLength <= nums.length) {
    for (let i = 0; i < nums.length - windowLength; i++) {
      const sum = sums.get(i)! + nums[i + windowLength]!;
      if (sum === k) result++;
      sums.set(i, sum);
    }
    windowLength++;
  }

  return result;
}

function subarraySum(nums: number[], k: number): number {
  let result = 0;

  const sums = new Map<number, number>();
  sums.set(0, 1);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]!;

    const existingSum = sums.get(sum - k);
    if (existingSum !== undefined) {
      result += existingSum;
    }

    const sumCount = sums.get(sum);
    if (sumCount !== undefined) {
      sums.set(sum, sumCount + 1);
    } else {
      sums.set(sum, 1);
    }
  }

  return result;
}

console.log(2, subarraySum([1, 1, 1], 2));
console.log(2, subarraySum([1, 2, 3], 3));
console.log(0, subarraySum([1], 0));
console.log(1, subarraySum([-1, -1, 1], 0));
console.log(3, subarraySum([1, -1, 0], 0));
console.log(1, subarraySum([1], 1));

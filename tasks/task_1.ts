/**
 * https://leetcode.com/problems/two-sum/description/
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 */

function twoSum1(nums: number[], target: number): number[] {
  const numToIndex = new Map<number, number>();

  let index = nums.length - 1;
  while (index >= 0) {
    const currentValue = nums.pop()!;
    for (const [k, v] of numToIndex) {
      if (k + currentValue === target) {
        return [v, index];
      }
    }
    numToIndex.set(currentValue, index);
    index = index - 1;
  }

  return [];
}

function twoSum(nums: number[], target: number): number[] {
  const diffs = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]!;
    const difference = target - current;
    const savedIndex = diffs.get(current);
    if (savedIndex !== undefined) {
      return [savedIndex, i];
    }
    diffs.set(difference, i);
  }

  return [];
}

console.time("twoSum");
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.timeEnd("twoSum");

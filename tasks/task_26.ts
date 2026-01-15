/**
 * Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

function removeDuplicates(nums: Array<number>): number {
  const min = nums[0];
  while (true) {
    const last = nums.pop();
    const next = nums[nums.length - 1];
    if (last !== next) {
      nums.unshift(last!);
    }
    if (nums.length === 1 || next! > last!) break;
  }

  return nums.length;
}

console.log(2, removeDuplicates([1, 1, 2]));
console.log(5, removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(1, removeDuplicates([1, 1, 1]));

/**
 * Move Zeroes
 * https://leetcode.com/problems/move-zeroes/
 */

function moveZeroes_slow(nums: number[]): void {
  let count = 0;
  let j = 0;
  while (j <= nums.length - count) {
    if (nums[j] === 0) {
      count++;
      let i = j;
      while (i < nums.length - count) {
        const buf = nums[i + 1];
        nums[i + 1] = 0;
        nums[i] = buf!;
        i++;
      }
    }
    if (nums[j] !== 0) j++;
  }
}

function moveZeroes(nums: number[]): void {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i]!;
      count++;
    }
  }
  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
}

let num = [0, 1, 0, 3, 12];
moveZeroes(num);
console.log("[0, 1, 0, 3, 12]", num);

num = [0];
moveZeroes(num);
console.log("[0]", num);

num = [0, 1, 0];
moveZeroes(num);
console.log("[0, 1, 0]", num);

num = [0, 0, 1];
moveZeroes(num);
console.log("[0, 0, 1]", num);

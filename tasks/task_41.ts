function firstMissingPositive1(nums: number[]): number {
  nums.sort((a, b) => a - b);
  if (nums.length === 0) return 1;
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === result) {
      result++;
      continue;
    }
    if (result < nums[i]!) {
      return result;
    }
  }
  return result;
}

function firstMissingPositive(nums: number[]): number {
  const seen: boolean[] = new Array(nums.length + 1).fill(false);
  for (const num of nums) {
    if (num > 0 && num <= nums.length) {
      seen[num] = true;
    }
  }

  for (let i = 1; i <= seen.length; i++) {
    if (seen[i] === false) {
      return i;
    }
  }

  return nums.length + 1;
}

function firstMissingPositiveOpt(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i]! > 0 && nums[i]! <= n && nums[i] !== nums[nums[i]! - 1]) {
      const temp = nums[i];
      nums[i] = nums[temp! - 1]!;
      nums[temp! - 1] = temp!;
    }
    console.log(nums);
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}

console.log(firstMissingPositiveOpt([1, 2, 0])); // 3
console.log(firstMissingPositiveOpt([-1, -3, 0])); // 1
console.log(firstMissingPositiveOpt([3, 4, -1, 1])); // 2
console.log(firstMissingPositiveOpt([12, 11, 7, 8, 9])); // 1
console.log(firstMissingPositiveOpt([1])); // 2
console.log(firstMissingPositiveOpt([2])); // 1
console.log(firstMissingPositiveOpt([1, 1])); // 2

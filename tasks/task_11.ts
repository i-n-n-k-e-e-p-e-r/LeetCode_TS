/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 */

function maxArea(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (right - left > 0) {
    const area = Math.min(height[left]!, height[right]!) * (right - left);
    if (result < area) result = area;
    if (height[left]! >= height[right]!) {
      right--;
    } else {
      left++;
    }
    console.log(left, right, area);
  }

  return result;
}

// console.log(49, maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(1, maxArea([1, 1]));
// console.log(2, maxArea([1, 2, 1]));
console.log(7, maxArea([8, 7, 2, 1]));

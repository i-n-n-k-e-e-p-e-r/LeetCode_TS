/**
 * Find Two Non-overlapping Sub-arrays Each With Target Sum
 * https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/
 *
 * The condition asks: **"Before my current subarray starts, did we already find another subarray that sums to target?"**
 * If yes → we found two non-overlapping subarrays! Calculate their combined length and update the result.
 */

function minSumOfLengths_TimeLimit(arr: number[], target: number): number {
  if (arr.length === 0 || arr.length === 1) return -1;

  const arrs = new Array<number[]>();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      arrs.push([i, i]);
    }
  }

  if (arrs.length > 1) return 2;

  let window: number = 2;
  const maxWindow = arr.length - 1;
  while (window <= maxWindow) {
    for (let i = 0; i < arr.length - window + 1; i++) {
      const buf = arr.slice(i, i + window);
      if (buf.reduce((a, b) => a + b) === target) {
        const newSegment = [i, i + window - 1];
        for (let j = 0; j < arrs.length; j++) {
          const cur = arrs[j]!;
          if (
            (cur[0]! < newSegment[0]! &&
              cur[0]! < newSegment[1]! &&
              cur[1]! < newSegment[0]!) ||
            (cur[0]! > newSegment[0]! &&
              cur[0]! > newSegment[1]! &&
              cur[1]! > newSegment[0]!)
          ) {
            return (
              newSegment[1]! -
              newSegment[0]! +
              1 +
              (arrs[j]![1]! - arrs[j]![0]! + 1)
            );
          }
        }
        arrs.push(newSegment);
      }
    }
    window++;
  }

  return -1;
}

function minSumOfLengths(arr: number[], target: number): number {
  if (arr.length === 0 || arr.length === 1) return -1;

  let result = Number.MAX_SAFE_INTEGER;

  const prefixArray = new Array<number>(arr.length).fill(
    Number.MAX_SAFE_INTEGER,
  );

  let left: number = 0;
  let currentSum = 0;
  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right]!;

    while (currentSum > target && left < right) {
      currentSum -= arr[left]!;
      left++;
    }

    if (currentSum === target) {
      prefixArray[right] = right - left + 1;

      const isThereValidArrBeforeCur =
        left > 0 && prefixArray[left - 1] !== Number.MAX_SAFE_INTEGER;

      if (isThereValidArrBeforeCur) {
        result = Math.min(prefixArray[right]! + prefixArray[left - 1]!, result);
      }
    }

    if (right > 0)
      prefixArray[right] = Math.min(
        prefixArray[right]!,
        prefixArray[right - 1]!,
      );
  }

  console.log(prefixArray);

  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}

console.log(2, minSumOfLengths([1, 1, 1], 1));
console.log(2, minSumOfLengths([3, 2, 2, 4, 3], 3));
console.log(2, minSumOfLengths([7, 3, 4, 7], 7));
console.log(-1, minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6));
console.log(5, minSumOfLengths([2, 1, 3, 3, 2, 3, 1], 6));
console.log(3, minSumOfLengths([3, 1, 1, 1, 5, 1, 2, 1], 3));
console.log(-1, minSumOfLengths([1, 6, 1], 7));
console.log(
  23,
  minSumOfLengths(
    [
      2, 2, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1,
    ],
    20,
  ),
);
console.log(6, minSumOfLengths([1, 1, 1, 2, 2, 2, 4, 4], 6));

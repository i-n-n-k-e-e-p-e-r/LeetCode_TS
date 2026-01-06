/**
 * Non overlaping intervals
 * https://leetcode.com/problems/non-overlapping-intervals/
 */

function eraseOverlappingIntervals(intervals: number[][]): number {
  let result: number = 0;
  if (intervals.length === 0) return result;

  intervals.sort((a, b) => a[1]! - b[1]!);
  console.log(intervals);
  let last = intervals[0]!;
  for (let i = 1; i < intervals.length; i++) {
    const cur: number[] = intervals[i]!;
    if (cur[0]! < last[1]!) {
      result++;
    } else {
      last = cur;
    }
  }

  return result;
}

console.log(
  1,
  " | ",
  eraseOverlappingIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
);
console.log(
  2,
  " | ",
  eraseOverlappingIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ]),
);
console.log(
  0,
  " | ",
  eraseOverlappingIntervals([
    [1, 2],
    [2, 3],
  ]),
);
console.log(
  2,
  " | ",
  eraseOverlappingIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ]),
);

console.log(
  4,
  " | ",
  eraseOverlappingIntervals([
    [0, 2],
    [1, 3],
    [1, 3],
    [2, 4],
    [3, 5],
    [3, 5],
    [4, 6],
  ]),
);

console.log(
  27,
  " | ",
  eraseOverlappingIntervals([
    [-39, 21],
    [-38, 5],
    [-67, 67],
    [23, 37],
    [83, 95],
    [-71, -19],
    [-19, 64],
    [4, 31],
    [37, 96],
    [30, 57],
    [-19, 12],
    [53, 75],
    [-54, 83],
    [-32, 38],
    [-18, 16],
    [-60, 9],
    [92, 93],
    [-12, 20],
    [-37, 35],
    [19, 36],
    [46, 56],
    [45, 52],
    [-67, -29],
    [30, 67],
    [67, 79],
    [52, 98],
    [59, 60],
    [-63, 7],
    [7, 20],
    [16, 59],
    [83, 96],
    [-59, -3],
    [33, 41],
    [-67, -49],
    [-15, 67],
  ]),
);

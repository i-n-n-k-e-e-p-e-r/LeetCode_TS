import { randomString } from "../helpers";

/**
 * @link https://leetcode.com/problems/zigzag-conversion/description/
 */
function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;
  let result: string = "";

  const mainStep = (numRows - 1) * 2;
  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    const step = mainStep - rowIndex;
    for (let index = 0; index < s.length; index += mainStep) {
      if (index + rowIndex < s.length) result += s[index + rowIndex];
      if (rowIndex !== 0 && rowIndex !== numRows - 1 && index + step < s.length)
        result += s[index + step];
    }
  }

  return result;
}

console.time("convert");
for (let i = 0; i < 1000; i++) {
  convert(randomString(1000), 10);
}
console.timeEnd("convert");

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1)); // "A"

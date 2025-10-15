import { generateRandomArray } from '../helpers';

/**
 * @link https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length === 0 && nums2.length === 0) return 0;
    if ((!nums1 || nums1.length === 0) && nums2 && nums2.length > 0) {
        const mid = Math.floor(nums2.length / 2);
        return nums2.length % 2 === 0 ? (nums2[mid - 1]! + nums2[mid]!) / 2 : nums2[mid]!;
    }
    if ((!nums2 || nums2.length === 0) && nums1 && nums1.length > 0) {
        const mid = Math.floor(nums1.length / 2);
        return nums1.length % 2 === 0 ? (nums1[mid - 1]! + nums1[mid]!) / 2 : nums1[mid]!;
    }
    if (nums1.length < nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const totalLength = nums1.length + nums2.length;
    const resArr: number[] = new Array<number>(totalLength);
    let i = 0, j = 0, k = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i]! < nums2[j]!) {
            resArr[k++] = nums1[i++]!;
        } else {
            resArr[k++] = nums2[j++]!;
        }
    }
    while (i < nums1.length) {
        resArr[k++] = nums1[i++]!;
    }
    while (j < nums2.length) {
        resArr[k++] = nums2[j++]!;
    }
    const mid = Math.floor(resArr.length / 2);
    if (resArr.length % 2 === 0) {
        return (resArr[mid - 1]! + resArr[mid]!) / 2;
    } else {
        return resArr[mid]!;
    }
};

console.time('findMedianSortedArrays');
for (let i = 0; i < 10000; i++) {
    const arr1 = generateRandomArray(Math.floor(Math.random() * 10));
    const arr2 = generateRandomArray(Math.floor(Math.random() * 10));
    findMedianSortedArrays(arr1.sort((a, b) => a - b), arr2.sort((a, b) => a - b));
}
console.timeEnd('findMedianSortedArrays');
console.log(findMedianSortedArrays([1, 3], [2])); // 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.50000
console.log(findMedianSortedArrays([], [1])); // 1.00000
console.log(findMedianSortedArrays([2], [])); // 2.00000
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0.00000
console.log(findMedianSortedArrays([], [2, 3])); // 2.50000
console.log(findMedianSortedArrays([1], [2, 3, 4])); // 2.50000
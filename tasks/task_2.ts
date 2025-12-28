/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order,
 * and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero,
 * except the number 0 itself.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function arrayToList(input: number[]): ListNode | null {
  if (!input || input.length === 0) {
    return null;
  }
  return new ListNode(input.pop(), arrayToList(input));
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1 || !l2) return null;
  let a1: number[] = [];
  let a2: number[] = [];

  while (l1 || l2) {
    if (l1) {
      a1.push(l1.val);
      l1 = l1.next;
    }
    if (l2) {
      a2.push(l2.val);
      l2 = l2.next;
    }
  }

  const resultArray: number[] = [];
  let result: ListNode | null = null;
  let t = 0;
  if (a2.length > a1.length) {
    [a1, a2] = [a2, a1];
  }

  while (a1.length > 0) {
    const sum = a1.shift()! + (a2.shift() ?? 0) + t;
    t = sum >= 10 ? 1 : 0;
    resultArray.push(sum % 10);
  }

  if (t === 1) {
    resultArray.push(1);
  }

  resultArray.reverse().map((e) => {
    result = new ListNode(e, result);
  });

  return result;
}

console.time("addTwoNumbers1");
const l1 = arrayToList([3, 4, 2]);
const l2 = arrayToList([4, 6, 5]);
console.log(addTwoNumbers(l1, l2));
console.timeEnd("addTwoNumbers1");

console.time("addTwoNumbers2");
const l11 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
const l22 = arrayToList([9, 9, 9]);
console.log(addTwoNumbers(l11, l22));
console.timeEnd("addTwoNumbers2");

console.time("addTwoNumbers3");
const l111 = arrayToList([9, 4, 2]);
const l222 = arrayToList([9, 4, 6, 5]);
console.log(addTwoNumbers(l111, l222));
console.timeEnd("addTwoNumbers3");

/**
 * Reverse linked list
 * https://leetcode.com/problems/reverse-linked-list/
 */

import { notDeepEqual } from "node:assert/strict";

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function arrayToListNode(nums: number[], parent?: ListNode): ListNode | null {
  const e = nums.shift();
  if (e !== undefined) {
    return new ListNode(e, arrayToListNode(nums));
  }
  return null;
}

function reverseListBad(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let arr: number[] = [];
  while (head !== null) {
    if (head.val !== null) arr = [head.val, ...arr];
    head = head.next;
  }
  console.log(arr);
  return arrayToListNode(arr);
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let prev = null;

  while (head !== null) {
    const next: ListNode | null = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

console.log(reverseList(arrayToListNode([1, 2, 3, 4, 5])));
console.log("--------");
console.log(reverseList(arrayToListNode([2, 1])));
console.log(reverseList(arrayToListNode([])));
console.log(reverseList(null));

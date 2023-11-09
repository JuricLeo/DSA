class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let merged: ListNode;

  if (l1.val < l2.val) {
    merged = new ListNode(l1.val, mergeTwoLists(l1.next, l2));
  } else {
    merged = new ListNode(l2.val, mergeTwoLists(l1, l2.next));
  }

  return merged;
}

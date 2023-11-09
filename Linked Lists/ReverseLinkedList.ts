// T: O(n)
// S: O(1)

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let currentNode = head;
  let prevNode: ListNode | null = null;

  while (currentNode) {
    const nextNode = currentNode.next;

    currentNode.next = prevNode;
    prevNode = currentNode;

    if (!nextNode) return currentNode;

    currentNode = nextNode;
  }

  return currentNode;
}



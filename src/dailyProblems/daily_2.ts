class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;

  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const x = l1 !== null ? l1.val : 0;
    const y = l2 !== null ? l2.val : 0;

    const sum = x + y + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(digit);
    current = current.next;

    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  return dummy.next;
}

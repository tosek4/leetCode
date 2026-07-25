/*
You are given a positive integer n.

Return the maximum product of any two digits in n.

Note: You may use the same digit twice if it appears more than once in n.
Input: n = 31

Output: 3

Explanation:

The digits of n are [3, 1].
The possible products of any two digits are: 3 * 1 = 3.
The maximum product is 3.
*/

export function maxProduct(n: number): number {
  const filterN = n
    .toString()
    .split("")
    .map((el) => Number(el))
    .sort((a, b) => b - a);

  return filterN[0] * filterN[1];
}

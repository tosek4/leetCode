function gcd(a: number, b: number): number {
  while (b) {
    let t = a % b;
    a = b;
    b = t;
  }
  return a;
}
export function gcdOfOddEvenSums(n: number): number {
  let odd = 1;
  let even = 2;
  let sumOdd = 0;
  let sumEven = 0;
  while (n > 0) {
    sumEven = sumEven + even;
    sumOdd = sumOdd + odd;
    even += 2;
    odd += 2;
    n--;
  }

  return gcd(sumOdd, sumEven);
}

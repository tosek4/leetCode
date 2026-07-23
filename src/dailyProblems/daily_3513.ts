export function uniqueXorTriplets(nums: number[]): number {
  const n = nums.length;

  if (n <= 2) {
    return n;
  }

  const bitLength = 32 - Math.clz32(n);
  return 1 << bitLength;
}

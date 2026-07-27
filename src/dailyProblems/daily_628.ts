export function maximumProduct(nums: number[]): number {
  const sortNums = nums.sort((a, b) => b - a);

  const n = nums.length;

  const sum1 = sortNums[0] * sortNums[1] * sortNums[2];
  const sum2 = sortNums[0] * sortNums[1] * sortNums[n - 1];
  const sum3 = sortNums[0] * sortNums[n - 2] * sortNums[n - 1];

  return Math.max(sum1, sum2, sum3);
}

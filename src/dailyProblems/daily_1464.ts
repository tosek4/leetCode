export function maxProduct(nums: number[]): number {
  const filterN = nums.sort((a, b) => b - a);

  return (filterN[0] - 1) * (filterN[1] - 1);
}

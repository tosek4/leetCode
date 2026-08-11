export function missingInteger(nums: number[]): number {
  // 1. Create a set of original numbers for O(1) lookups
  const numSet = new Set(nums);
  // 2. Compute the sum of the sequential prefix starting at index 0
  let prefixSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      prefixSum += nums[i];
    } else {
      break; // Stop immediately when the sequence breaks
    }
  }
  // 3. Find the smallest missing integer >= prefixSum
  while (numSet.has(prefixSum)) {
    prefixSum++;
  }

  return prefixSum;
}

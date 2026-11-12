export function longestMonotonicSubarray(nums: number[]): number {
  let longestLengthIncreasing = 1;
  let longestLengthDecreasing = 1;
  // increasing
  for (let i = 0; i < nums.length; i++) {
    let currentLength = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[j - 1]) {
        currentLength++;
      } else {
        break;
      }
    }
    longestLengthIncreasing = Math.max(longestLengthIncreasing, currentLength);
  }

  // decreasing
  for (let i = 0; i < nums.length; i++) {
    let currentLength = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[j - 1]) {
        currentLength++;
      } else {
        break;
      }
    }
    longestLengthDecreasing = Math.max(longestLengthDecreasing, currentLength);
  }

  return Math.max(longestLengthIncreasing, longestLengthDecreasing);
}

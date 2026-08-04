export function findMissingElements(nums: number[]): number[] {
  const sortNums = nums.sort((a, b) => a - b);

  let missingNum: number[] = [];
  for (let i = sortNums[0]; i < sortNums[sortNums.length - 1]; i++) {
    if (!sortNums.includes(i)) {
      missingNum.push(i);
    }
  }
  return missingNum;
}

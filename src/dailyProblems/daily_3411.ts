function gcdTwo(a: number, b: number): number {
  while (b) {
    let t = a % b;
    a = b;
    b = t;
  }
  return a;
}

function lcmTwo(a: number, b: number): number {
  return (a * b) / gcdTwo(a, b);
}

export function maxLength(nums: number[]): number {
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    let currentGcd = 0;
    let currentLcm = 1;

    for (let j = i; j < nums.length; j++) {
      const num = nums[j];

      product *= num;
      currentGcd = gcdTwo(currentGcd, num);
      currentLcm = lcmTwo(currentLcm, num);

      if (product === currentGcd * currentLcm) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }

  return maxLen;
}

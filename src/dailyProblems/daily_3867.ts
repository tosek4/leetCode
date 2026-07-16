function gcd(a: number, b: number): number {
  while (b) {
    let t = a % b;
    a = b;
    b = t;
  }
  return a;
}

export function gcdSum(nums: number[]): number {
  let sum = 0;

  
  //   let prefixGcd: number[] = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     const mxValue = Math.max(...nums.slice(0, i + 1));
  //     prefixGcd.push(gcd(nums[i], mxValue));
  //   }

  const prefixGcd = new Array(nums.length);
  let currentMax = 0;

  for (let i = 0; i < nums.length; i++) {
    currentMax = Math.max(currentMax, nums[i]);
    prefixGcd[i] = gcd(nums[i], currentMax);
  }

  prefixGcd.sort((a, b) => a - b);
  let min = 0;
  let max = prefixGcd.length - 1;

  while (min < max) {
    const res = gcd(prefixGcd[min], prefixGcd[max]);
    sum += res;

    min++;
    max--;
  }

  return sum;
}

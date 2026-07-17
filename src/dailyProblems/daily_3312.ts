//my solution but got run time error about memory
//FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory

// function gcd(a: number, b: number): number {
//   while (b) {
//     let t = a % b;
//     a = b;
//     b = t;
//   }
//   return a;
// }

// export function gcdValues(nums: number[], queries: number[]): number[] {
//   let gcdPairs: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       gcdPairs.push(gcd(nums[i], nums[j]));
//     }
//   }
//   gcdPairs.sort((a, b) => a - b);

//   let result: number[] = [];

//   for (const query of queries) {
//     result.push(gcdPairs[query]);
//   }
//   return result;
// }
export function gcdValues(nums: number[], queries: number[]): number[] {
    const maxVal = Math.max(...nums);

    // Frequency of each value
    const freq = new Array(maxVal + 1).fill(0);
    for (const x of nums) freq[x]++;

    // cnt[g] = how many numbers are divisible by g
    const cnt = new Array(maxVal + 1).fill(0);

    for (let g = 1; g <= maxVal; g++) {
        for (let multiple = g; multiple <= maxVal; multiple += g) {
            cnt[g] += freq[multiple];
        }
    }

    // exactPairs[g] = number of pairs with gcd exactly g
    const exactPairs = new Array(maxVal + 1).fill(0);

    for (let g = maxVal; g >= 1; g--) {
        let pairs = (cnt[g] * (cnt[g] - 1)) / 2;

        for (let multiple = g * 2; multiple <= maxVal; multiple += g) {
            pairs -= exactPairs[multiple];
        }

        exactPairs[g] = pairs;
    }

    // Prefix counts
    const prefix = new Array(maxVal + 1).fill(0);
    for (let g = 1; g <= maxVal; g++) {
        prefix[g] = prefix[g - 1] + exactPairs[g];
    }

    const result: number[] = [];

    for (const q of queries) {
        const target = q + 1;

        let left = 1;
        let right = maxVal;

        while (left < right) {
            const mid = (left + right) >> 1;

            if (prefix[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        result.push(left);
    }

    return result;
}
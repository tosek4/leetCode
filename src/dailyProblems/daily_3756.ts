// export function sumAndMultiply(s: string, queries: number[][]): number[] {
//   const results: number[] = [];
//   for (const [start, end] of queries) {
//     let sum = 0;
//     let number = 0n;
//     for (let i = start; i <= end; i++) {
//       const digit = parseInt(s[i]);
//       sum += digit;
//       if (digit !== 0) {
//         number = number * 10n + BigInt(digit);
//       }
//     }

//     const answer = (BigInt(sum) * number) % 1000000007n;
//     results.push(Number(answer));
//   }
//   return results;
// }
// TIME LIMIT EXCEEDED

export function sumAndMultiply(s: string, queries: number[][]): number[] {
  const MOD = 1_000_000_007n;

  const n = s.length;

  const countPrefix: number[] = new Array(n + 1).fill(0);

  console.log("countPrefix====", countPrefix);
  const digits: number[] = [];
  const sumPrefix: bigint[] = [0n];
  const numPrefix: bigint[] = [0n];

  for (let i = 0; i < n; i++) {
    const digit = Number(s[i]);

    countPrefix[i + 1] = countPrefix[i];

    if (digit !== 0) {
      countPrefix[i + 1]++;

      digits.push(digit);

      sumPrefix.push(sumPrefix[sumPrefix.length - 1] + BigInt(digit));

      numPrefix.push(
        (numPrefix[numPrefix.length - 1] * 10n + BigInt(digit)) % MOD,
      );
    }
  }
  console.log("countPrefix>>>>>", countPrefix);
  console.log("numPrefix>>>>>", numPrefix);

  const pow10: bigint[] = [1n];

  for (let i = 1; i <= digits.length; i++) {
    pow10.push((pow10[i - 1] * 10n) % MOD);
  }

  const answer: number[] = [];

  for (const [l, r] of queries) {
    const start = countPrefix[l];
    const end = countPrefix[r + 1];

    const len = end - start;

    let x = 0n;

    if (len > 0) {
      x =
        (numPrefix[end] - ((numPrefix[start] * pow10[len]) % MOD) + MOD) % MOD;
    }

    const sum = (sumPrefix[end] - sumPrefix[start]) % MOD;

    answer.push(Number((x * sum) % MOD));
  }

  return answer;
}

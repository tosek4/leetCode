function gcd(a: number, b: number): number {
  while (b) {
    let t = a % b;
    a = b;
    b = t;
  }
  return a;
}

function subsequencePairCount(nums: number[]): number {
  const MOD = 1_000_000_007;

  const MAX = 200;
  const SIZE = MAX + 1;

  let dp = new Uint32Array(SIZE * SIZE);

  dp[0] = 1;

  for (const x of nums) {
    const next = new Uint32Array(SIZE * SIZE);

    for (let g1 = 0; g1 <= MAX; g1++) {
      for (let g2 = 0; g2 <= MAX; g2++) {
        const idx = g1 * SIZE + g2;
        const val = dp[idx];

        if (val === 0) continue;

        next[idx] = (next[idx] + val) % MOD;

        const ng1 = gcd(g1, x);
        const idx1 = ng1 * SIZE + g2;

        next[idx1] = (next[idx1] + val) % MOD;

        const ng2 = gcd(g2, x);
        const idx2 = g1 * SIZE + ng2;

        next[idx2] = (next[idx2] + val) % MOD;
      }
    }

    dp = next;
  }

  let ans = 0;

  for (let g = 1; g <= MAX; g++) {
    ans += dp[g * SIZE + g];

    ans %= MOD;
  }

  return ans;
}

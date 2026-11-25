export function smallestUniqueSubarray(nums: number[]): number {
  const n = nums.length;

  for (let len = 1; len <= n; len++) {
    const counts = new Map<string, number>();

    for (let i = 0; i <= n - len; i++) {
      const key = nums.slice(i, i + len).join(",");
      counts.set(key, (counts.get(key) || 0) + 1);
    }

    for (const count of counts.values()) {
      if (count === 1) {
        return len;
      }
    }
  }

  return n;
}

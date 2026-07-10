export function pathExistenceQueries(
  n: number,
  nums: number[],
  maxDiff: number,
  queries: number[][],
): number[] {
  const answer: number[] = [];
  const pos = new Array(n);

  const sorted = nums
    .map((value, index) => ({
      value,
      index,
    }))
    .sort((a, b) => a.value - b.value);

  for (let i = 0; i < n; i++) {
    pos[sorted[i].index] = i;
  }

  const right = new Array(n);

  let r = 0;

  for (let l = 0; l < n; l++) {
    if (r < l) {
      r = l;
    }

    while (r + 1 < n && sorted[r + 1].value - sorted[l].value <= maxDiff) {
      r++;
    }

    right[l] = r;
  }

  const LOG = Math.ceil(Math.log2(n)) + 1;
  const jump: number[][] = Array.from({ length: LOG }, () => new Array(n));

  for (let i = 0; i < n; i++) {
    jump[0][i] = right[i];
  }

  for (let k = 1; k < LOG; k++) {
    for (let i = 0; i < n; i++) {
      jump[k][i] = jump[k - 1][jump[k - 1][i]];
    }
  }

  function canReach(start: number, end: number): boolean {
    let current = start;

    for (let k = LOG - 1; k >= 0; k--) {
      if (jump[k][current] < end) {
        current = jump[k][current];
      }
    }

    return right[current] >= end;
  }

  for (const [u, v] of queries) {
    let start = pos[u];
    let end = pos[v];

    if (start === end) {
      answer.push(0);
      continue;
    }

    if (start > end) {
      [start, end] = [end, start];
    }
    if (!canReach(start, end)) {
      answer.push(-1);
      continue;
    }

    let count = 0;
    let current = start;

    for (let k = LOG - 1; k >= 0; k--) {
      if (jump[k][current] < end) {
        current = jump[k][current];
        count += 1 << k;
      }
    }

    count++;

    answer.push(count);
  }
  return answer;
}

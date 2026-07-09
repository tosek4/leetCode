export function pathExistenceQueries(
  n: number,
  nums: number[],
  maxDiff: number,
  queries: number[][],
): boolean[] {
  const component = new Array(n);

  let id = 0;
  component[0] = id;

  for (let i = 1; i < n; i++) {
    if (nums[i] - nums[i - 1] <= maxDiff) {
      component[i] = id;
    } else {
      id++;
      component[i] = id;
    }
  }

  const answer: boolean[] = [];

  for (const [u, v] of queries) {
    answer.push(component[u] === component[v]);
  }

  return answer;
}

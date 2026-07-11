export function countCompleteComponents(n: number, edges: number[][]): number {
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  const visited = new Array(n).fill(false);
  let answer = 0;

  function dfs(node: number): [number, number] {
    visited[node] = true;

    let nodes = 1;
    let degreeSum = graph[node].length;

    for (const next of graph[node]) {
      if (!visited[next]) {
        const [childNodes, childDegree] = dfs(next);
        nodes += childNodes;
        degreeSum += childDegree;
      }
    }

    return [nodes, degreeSum];
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      const [nodes, degreeSum] = dfs(i);
      const edgesInComponent = degreeSum / 2;

      if (edgesInComponent === (nodes * (nodes - 1)) / 2) {
        answer++;
      }
    }
  }

  return answer;
}

export function shiftGrid(grid: number[][], k: number): number[][] {
  if (k === 0) {
    return grid;
  }
  const finalGrid = Array.from({ length: grid.length }, (_, i) =>
    Array(grid[i].length),
  );

  while (k > 0) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (i === grid.length - 1 && j === grid[i].length - 1) {
          finalGrid[0][0] = grid[i][j];
        } else if (j === grid[i].length - 1) {
          finalGrid[i + 1][0] = grid[i][j];
        } else {
          finalGrid[i][j + 1] = grid[i][j];
        }
      }
    }
    k--;
    grid = finalGrid.map((row) => [...row]);
  }
  return finalGrid;
}

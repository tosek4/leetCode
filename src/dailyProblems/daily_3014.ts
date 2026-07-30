export function minimumPushes(word: string): number {
  let n = word.length;
  let keyAvailable = 8;
  let pushes = 0;
  let position = 1;
  while (n > 0) {
    const put = Math.min(n, keyAvailable);
    pushes += put * position;
    n -= put;
    position++;
  }
  return pushes;
}

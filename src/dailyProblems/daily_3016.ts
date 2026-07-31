export function minimumPushes(word: string): number {
  let position = 1;
  let pushes = 0;
  let map = new Map<string, number>();
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (map.has(char)) {
      map.set(char, map.get(char)! + 1);
    } else {
      map.set(char, 1);
    }
  }

  const sortMap = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  sortMap.forEach((value, key) => {
    if (key === 8 || key === 16 || key === 24) {
      position++;
    }
    pushes += position * value[1];
  });

  return pushes;
}

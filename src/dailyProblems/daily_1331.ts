export function arrayRankTransform(arr: number[]): number[] {
  const map = new Map<number, number>();
  const sortArr = [...arr];
  sortArr.sort((a, b) => a - b);

  const removeDuplicate: number[] = [];

  for (const num of sortArr) {
    if (
      removeDuplicate.length === 0 ||
      removeDuplicate[removeDuplicate.length - 1] !== num
    ) {
      removeDuplicate.push(num);
    }
  }
  for (let i = 0; i < removeDuplicate.length; i++) {
    map.set(removeDuplicate[i], i + 1);
  }
  return arr.map((el) => map.get(el)!);
}

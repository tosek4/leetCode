export function sequentialDigits(low: number, high: number): number[] {
  const masterString = "123456789";

  let res: number[] = [];
  const lowLength = low.toString().length;
  const highLength = high.toString().length;

  for (let i = lowLength; i <= highLength; i++) {
    let m = 0;
    let k = i;

    while (k <= 10) {
      const numb = parseInt(masterString.slice(m, k));
      if (numb >= low && numb <= high) {
        if (!res.find((el) => el === numb)) res.push(numb);
      }
      k++;
      m++;
    }
  }

  return res;
}

export function sumAndMultiply(n: number): number {
  //   let sum = n
  //     .toString()
  //     .split("")
  //     .reduce((acc, curr) => (curr !== "0" ? acc + parseInt(curr) : acc), 0);

  //   let num = n
  //     .toString()
  //     .split("")
  //     .reduce(
  //       (acc, curr) =>
  //         curr !== "0" ? acc * 10 + parseInt(curr) : acc,
  //       0,
  //     );

  let sum = 0;
  let num = 0;

  for (let i = 0; i < n.toString().length; i++) {
    if (n.toString()[i] !== "0") {
      sum += parseInt(n.toString()[i]);
      num = num * 10 + parseInt(n.toString()[i]);
    }
  }

  return num * sum;
}

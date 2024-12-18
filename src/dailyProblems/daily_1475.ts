export function finalPrices(prices: number[]): number[] {
  return prices.map((el, index) => {
    const num = prices.slice(index + 1).find((item) => item <= el);
    if (num) {
      return el - num;
    } else {
      return el;
    }
  });
}

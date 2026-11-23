export class ProductOfNumbers {
  private product: number[] = [];

  constructor() {
    this.product = [1];
  }

  add(num: number): void {
    if (num === 0) {
      this.product = [1];
      return;
    }

    this.product.push(this.product[this.product.length - 1] * num);
  }

  getProduct(k: number): number {
    const n = this.product.length;

    if (k >= n) {
      return 0;
    }

    return this.product[n - 1] / this.product[n - 1 - k];
  }
}

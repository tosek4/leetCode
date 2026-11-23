import { ProductOfNumbers } from "./dailyProblems/daily_1352";

// Product Of Numbers - LeetCode 1352
const product = new ProductOfNumbers();

product.add(3);
product.add(0);
product.add(2);
product.add(5);
product.add(4);

console.log("Product of last 2:", product.getProduct(2)); // 20
console.log("Product of last 3:", product.getProduct(3)); // 40
console.log("Product of last 4:", product.getProduct(4)); // 0

product.add(8);

console.log("Product of last 2:", product.getProduct(2)); // 32

// mid level solution
export function isPalindrome(x: number): boolean {
  let answer = false;
  let p = 0;
  const xLength = x.toString().length;
  let tmpX = x.toString();
  for (let i = xLength - 1; i >= 0; i--) {
    const k = parseInt(tmpX[i]);
    console.log("k", k);
    p = p * 10 + k;
  }


  if (p === x) {
    answer = true;
  }
  return answer;
}

//senior solution
export function isPalindromeV2(x: number): boolean {
  // Negative numbers cannot be palindromes
  if (x < 0) return false;

  // Numbers ending with 0 cannot be palindrome (except 0 itself)
  if (x !== 0 && x % 10 === 0) return false;

  let reversed = 0;

  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // For odd length numbers, remove the middle digit
  return x === reversed || x === Math.floor(reversed / 10);
}

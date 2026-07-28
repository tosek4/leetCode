export function smallestPalindrome(s: string): string {
  const n = s.length;
  if (n % 2 === 0) {
    const mid = n / 2;
    const left = s.slice(0, mid);
    const right = s.slice(mid);
    return (
      left.split("").sort().join("") + right.split("").sort().reverse().join("")
    );
  } else {
    const mid = Math.floor(n / 2);
    const left = s.slice(0, mid);
    const right = s.slice(mid + 1);
    return (
      left.split("").sort().join("") +
      s[mid] +
      right.split("").sort().reverse().join("")
    );
  }
}

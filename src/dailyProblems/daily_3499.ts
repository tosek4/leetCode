//101
// not correct solution.....
export function maxActiveSectionsAfterTrade(s: string): number {
  if (!s.includes("1")) {
    return 0;
  }
  if (!s.includes("0")) {
    return s.length;
  }
  let max = 1;
  for (let i = 0; i < s.length; i++) {
    let tmpMax = 1;
    if (s[i] === "1" && s[i + 1] === "0" && s[i - 1] == "0") {
      for (let l = i - 1; l >= 0; l--) {
        if (s[l] === "0") {
          tmpMax++;
        }
        if (s[l] === "1") {
          tmpMax++;
          break;
        }
      }
      for (let r = i + 1; r < s.length; r++) {
        if (s[r] === "0") {
          tmpMax++;
        }
        if (s[r] === "1") {
          tmpMax++;
          break;
        }
      }
    } else if (s[i] === "1" && s[i + 1] === "0") {
     
      for (let r = i + 1; r < s.length; r++) {
        if (s[r] === "0") {
          tmpMax++;
        }
        if (s[r] === "1") {
          tmpMax++;
          break;
        }
      }
    }
    if (tmpMax > max) {
      max = tmpMax;
    }
  }
  return max;
}

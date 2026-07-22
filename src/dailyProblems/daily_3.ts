export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) {
    return 1;
  }
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let tmpWord = s[i];
    for (let j = i + 1; j < s.length; j++) {
      const newLetter = s[j];
      if (!tmpWord.includes(newLetter)) {
        tmpWord += newLetter;
      } else {
        if (max < tmpWord.length) {
          max = tmpWord.length;
        }
        break;
      }

      if (j === s.length - 1) {
        if (max < tmpWord.length) {
          max = tmpWord.length;
        }
        break;
      }
    }
  }
  return max;
}

export function canMakeSubsequence(str1: string, str2: string): boolean {
  let flag = 0;
  let c1 = 0;
  let c2 = 0;

  while (c1 !== str1.length && c2 !== str2.length) {
    if (c2 === c1) {
      if (str2[c2].charCodeAt(0) === str1[c1].charCodeAt(0)) {
        flag++;
        c2++;
      } else if (str1[c1].charCodeAt(0) === 122) {
        if (str2[c2].charCodeAt(0) === 97) {
          flag++;
          c2++;
        }
      } else if (str2[c2].charCodeAt(0) === str1[c1].charCodeAt(0) + 1) {
        flag++;
        c2++;
      }
    } else if (str2[c2].charCodeAt(0) === str1[c1].charCodeAt(0)) {
      flag++;
      c2++;
    } else if (str1[c1].charCodeAt(0) === 122) {
      if (str2[c2].charCodeAt(0) === 97) {
        flag++;
        c2++;
      }
    } else if (str2[c2].charCodeAt(0) === str1[c1].charCodeAt(0) + 1) {
      flag++;
      c2++;
    }
    c1++;
  }

  if (flag === str2.length) {
    return true;
  } else {
    return false;
  }
}

/*
A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"

Output: ["sweet","sour"]

Explanation:

The word "sweet" appears only in s1, while the word "sour" appears only in s2.
*/

export function uncommonFromSentences(s1: string, s2: string): string[] {
  const result = [];
  const s1Words = s1.split(" ");

  const s2Words = s2.split(" ");
  const tmp = s1Words.concat(s2Words);

  for (let i = 0; i < tmp.length; i++) {
    let count = 0;
    for (let j = 0; j < tmp.length; j++) {
      console.log("lem", tmp.length);
      if (i != j) {
        if (tmp[i] !== tmp[j]) {
          count++;
          if (count === tmp.length - 1) {
            result.push(tmp[i]);
          }
        }
      }
    }
  }

  return result;
}

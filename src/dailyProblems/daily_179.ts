/*

Topics
Companies
Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

 

Example 1:

Input: nums = [10,2]
Output: "210"
Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"
*/

export function largestNumber(nums: number[]): string {
  const result: number[] = [];
  while (nums.length > 0) {
    let tmpNum;
    let tmpS: number = 0;
    nums.map((el, index) => {
      tmpNum = nums[index + 1];
      if (tmpNum !== undefined) {
        const n1 = Number(String(el) + String(tmpNum));
        const n2 = Number(String(tmpNum) + String(el));
        if (n1 > n2) {
          const num1 = Number(String(el) + String(tmpS));
          const num2 = Number(String(tmpS) + String(el));
          if (num1 > num2) {
            tmpS = el;
          }
        } else {
          const num1 = Number(String(tmpNum) + String(tmpS));
          const num2 = Number(String(tmpS) + String(tmpNum));
          if (num1 > num2) {
            tmpS = tmpNum;
          }
        }
      } else {
        const num1 = Number(String(el) + String(tmpS));
        const num2 = Number(String(tmpS) + String(el));
        if (num1 > num2) {
          tmpS = el;
        }

        const numIndex = nums.indexOf(tmpS);
        if (numIndex !== -1) {
          nums.splice(numIndex, 1);
        }
      }
    });
    if (tmpS !== 0 || result.indexOf(0) !== 0) {
      result.push(tmpS as number);
    }
  }

  return result.join("");
}

/*
You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.

The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.

Return the maximum score of a pair of sightseeing spots.

 

Example 1:

Input: values = [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
Example 2:

Input: values = [1,2]
Output: 2
*/

// true but got time limit exceeded
// export function maxScoreSightseeingPair(values: number[]): number {
//   let sum = 0;

//   let i = 0;
//   let j = 1;
//   while (i !== values.length) {
//     const distance = values[i] + values[j] + i - j;
//     if (sum < distance) {
//       sum = distance;
//     }
//     if (j === values.length) {
//       i++;
//       j = i + 1;
//       continue;
//     }
//     j++;
//   }
//   return sum;
// }

export function maxScoreSightseeingPair(values: number[]): number {
  let maxScore = 0;
  let maxLeft = values[0]; 

  for (let j = 1; j < values.length; j++) {
    maxScore = Math.max(maxScore, maxLeft + values[j] - j);
    maxLeft = Math.max(maxLeft, values[j] + j);
  }

  return maxScore;
}

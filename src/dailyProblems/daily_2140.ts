// export function mostPoints(questions: number[][]): number {
//   let maxSum = 0;

//   for (let k = 0; k < questions.length; k++) {
//     let question = k;
//     let sum = 0;
//     let i = 0;
//     while (true) {
//       if (question >= questions.length) {
//         break;
//       }
//       i = questions[question][1];
//       sum += questions[question][0];

//       question = question + i + 1;
//     }
//     if (maxSum < sum) {
//       maxSum = sum;
//     }
//   }
//   return maxSum;
// }
// not full correct answer

export function mostPoints(questions: number[][]): number {
  return 1;
}

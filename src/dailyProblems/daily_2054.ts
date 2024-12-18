/*
You are given a 0-indexed 2D integer array of events where events[i] = [startTimei, endTimei, valuei]. 
The ith event starts at startTimei and ends at endTimei, and if you attend this event, you will receive a value of valuei.
 You can choose at most two non-overlapping events to attend such that the sum of their values is maximized.

Return this maximum sum.

Note that the start time and end time is inclusive: that is, you cannot attend two events where one of 
them starts and the other ends at the same time. More specifically, if you attend an event with end time t, 
the next event must start at or after t + 1.

ex-1
Input: events = [[1,3,2],[4,5,2],[2,4,3]]
Output: 4
Explanation: Choose the green events, 0 and 1 for a sum of 2 + 2 = 4.

ex-2
Input: events = [[1,3,2],[4,5,2],[1,5,5]]
Output: 5
Explanation: Choose event 2 for a sum of 5.
 */

//----------------Time Limit Exceeded

// export function maxTwoEvents(events: number[][]): number {
//   events.sort((a, b) => a[0] - b[0]);

//   let maxEvent = 0;

//   let k = 0;
//   let l = 0;
//   if (events.length === 2) {
//     maxEvent = Math.max(...events.map((subArray) => subArray[2]));
//   } else {
//     while (k !== events.length - 1) {
//       if (events[k][1] - events[k][0] < events[l][1] - events[l][0]) {
//         if (maxEvent < events[l][2]) {
//           maxEvent = events[l][2];
//         }
//       }
//       if (
//         (events[l][0] < events[k][0] &&
//           events[l][0] < events[k][1] &&
//           events[l][1] < events[k][0] &&
//           events[l][1] < events[k][1]) ||
//         (events[l][0] > events[k][0] &&
//           events[l][0] > events[k][1] &&
//           events[l][1] > events[k][0] &&
//           events[l][1] > events[k][1])
//       ) {
//         if (maxEvent < events[k][2] + events[l][2]) {
//           maxEvent = events[k][2] + events[l][2];
//         }
//       }

//       if (l === events.length - 1) {
//         k++;
//         if (k >= events.length - 1) {
//           break;
//         }
//         l = k;
//       }
//       l++;
//     }
//   }
//   return maxEvent;
// }

// not my solution

export function maxTwoEvents(events: number[][]): number {
  // Sort events by endTime
  events.sort((a, b) => a[1] - b[1]);

  const n = events.length;
  const maxValues = new Array(n).fill(0);

  // Precompute maxValues to store the max value up to each event
  maxValues[0] = events[0][2];
  for (let i = 1; i < n; i++) {
    maxValues[i] = Math.max(maxValues[i - 1], events[i][2]);
  }

  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    const [startTime, endTime, value] = events[i];

    // Binary search to find the last event that ends before startTime
    let low = 0,
      high = i - 1,
      lastCompatible = -1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (events[mid][1] < startTime) {
        lastCompatible = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    // If a compatible event exists, calculate the sum
    const currentSum =
      value + (lastCompatible !== -1 ? maxValues[lastCompatible] : 0);

    // Update the maximum sum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

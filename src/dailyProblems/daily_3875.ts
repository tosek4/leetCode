// export function uniformArray(nums1: number[]): boolean {
//   let result: boolean = false;
//   let nums2: number[] = [];
//   let flagOdd: boolean = false;
//   let flagEven: boolean = false;

//   for (let i = 0; i < nums1.length; i++) {
//     if (i === nums1.length - 1) {
//       nums2.push(nums1[i]);
//       break;
//     }
//     nums2.push(nums1[i] - nums1[i + 1]);
//   }
//   console.log("nums2", nums2);

//   for (let i = 0; i < nums2.length; i++) {
//     if (nums2[i] % 2 !== 0) {
//       flagOdd = true;
//     } else {
//       flagEven = true;
//     }
//   }

//   if (flagOdd && flagEven) {
//     result = false;
//   } else {
//     result = true;
//   }

//   return result;
// }

export function uniformArray(nums1: number[]): boolean {
  const n = nums1.length;

  let oddCount = 0;
  let evenCount = 0;

  for (const num of nums1) {
    if (num % 2 === 0) evenCount++;
    else oddCount++;
  }

  let canAllEven = true;
  for (const num of nums1) {
    if (num % 2 === 1) {
      if (oddCount < 2) {
        canAllEven = false;
        break;
      }
    } else {
      // even number
    }
  }

  let canAllOdd = true;
  for (const num of nums1) {
    if (num % 2 === 0) {
      if (oddCount === 0) {
        canAllOdd = false;
        break;
      }
    } else {
      // odd number
    }
  }

  return canAllEven || canAllOdd;
}

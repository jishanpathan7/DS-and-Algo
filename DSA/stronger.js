// Tanveer always experiments with numbers ,once he found a sequence of numbers in order to find its strength .The sequence of integers **a1, a2, ..., an** and its strength is **|a1 - a2| + |a2 - a3| + ... + |a(n-1) - an| + |an - a1|**.

// He asked his friend to reorder this sequence into a new sequnece **b1, b2, ..., bn** in such a way that the new sequence to be as strong as possible .

// Can you help his friend to find the largest possible strength of the resulting sequence?

// Input Format :

// The input consists of 2 lines. The first line has a positive integer n. The second line contains the n integers a1, a2, ..., an.

// Constraints :

// 1 <= n <= 10^5.

// |ai| <= 10^9. Note that ai can be negative.

// Output
// Output a single integer: the maximum possible strength.


function maxStrength(arr) {
  let max = 0;
  let sum = 0;
  let start = 0;
  let end = 0;
  while (end < arr.length) {
    sum += arr[end];
    end++;
    while (sum > 0) {
      if (sum > max) {
        max = sum;
        start = start;
        end = end;
      }
      sum -= arr[start];
      start++;
    }
  }
  return max;
}
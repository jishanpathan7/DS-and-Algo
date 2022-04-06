// A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer, , rotate the array that many steps left and return the result.

// Example


// After  rotations, .

// Function Description

// Complete the rotateLeft function in the editor below.

// rotateLeft has the following parameters:

// int d: the amount to rotate by
// int arr[n]: the array to rotate
// Returns

// int[n]: the rotated array
// Input Format

// The first line contains two space-separated integers that denote , the number of integers, and , the number of left rotations to perform.
// The second line contains  space-separated integers that describe .

// Constraints

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4
// Explanation

// To perform  left rotations, the array undergoes the following sequence of changes:
// [1, 2, 3, 4, 5] -> [2, 3, 4, 5, 1] -> [3, 4, 5, 1, 2] -> [4, 5, 1, 2, 3] -> [5, 1, 2, 3, 4]


function rotateLeft(d, arr) {
  let result = [];
  for (let i = 0; i < d; i++) { //r
    result.push(arr.shift()); //
  }
  arr.push(...result);
  return arr;
}

// Given an array of N integers,  find the pair of integers in the array which have minimum XOR value. 
// Output the minimum XOR value.

function findMinXor(arr) {
  let n = arr.length;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      min = Math.min(min, arr[i] ^ arr[j]);
    }
  }
  return min;
}
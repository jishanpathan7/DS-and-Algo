//given an array of n integers and integer k, you need to roate the array by k elements.

function rotateAr(arr, k) {
  let n = arr.length;
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp[(i + k) % n] = arr[i];
  }
  return temp;
}
console.log(rotateAr([1, 2, 3, 4, 5], 2));
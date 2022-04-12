

function squareRootBinarySearch(n) {
  var low = 0;
  var high = n;
  var mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (mid * mid > n) {
      high = mid - 1;
    } else if (mid * mid < n) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return high;
}
console.log(squareRootBinarySearch(16));

//given an array of integers. find all unique integers in the array.
//unique intergers are the integers that appear only once in the array and the integers that appear more than once are not included.
//if no unique integers exist, return an empty array.
//example:
//input: [1,2,3,3,3,2,1]
//output: []


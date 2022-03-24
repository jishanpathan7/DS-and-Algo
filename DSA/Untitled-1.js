// Given an array of non-negative integers, and a value 'sum', determine if there is a subset of the given set (array) with sum equal to given sum.

// If there is a subset whose sum is equal to the required sum then print "yes" else print "no" without quotes.

function subSetSum(arr, sum) {
  if (arr.length === 0) return false;
  if (arr.length === 1) return arr[0] === sum;

  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sum) {
      result = true;
      break;
    }
    if (arr[i] < sum) {
      result = result || subSetSum(arr.slice(i + 1), sum - arr[i]);
    }
  }
  return result;
}

console.log(subSetSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
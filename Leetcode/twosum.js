//given an array of items and a target sum, find two items in the array that add up to the target sum
//example:
//input: [2,7,11,15], targetSum: 9
//output: [0,1]
//input: [2,7,11,15], targetSum: 26
//output: [2,3]
//input: [2,7,11,15], targetSum: 10
//output: [1,3]

function twoSumUsingTwoPointers(arr, targetSum) {
    var arr = arr.sort((a, b) => a - b); //sort the array in ascending order
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === targetSum) {
      return [left, right];
    } else if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
}
console.log(twoSumUsingTwoPointers([2,7,11,15], 9));
//given an array of items and a target sum, find two items in the array that add up to the target sum
//example:
//input: [2,7,11,15], targetSum: 9
//output: [0,1]
//input: [2,7,11,15], targetSum: 26
//output: [2,3]
//input: [2,7,11,15], targetSum: 10
//output: [1,3]

function twoSumUsingTwoPointers(arr, targetSum) {
    var arr = arr.sort((a, b) => a - b); //sort the array in ascending order for better performance
  let left = 0;
  let right = arr.length - 1;
  while (left < right) { // while left and right pointers are not equal
    let sum = arr[left] + arr[right]; // sum of the two elements at the current pointers
    if (sum === targetSum) { // if sum is equal to target sum
      return [left, right]; // return the indices of the two elements
    } else if (sum < targetSum) { // if sum is less than target sum
      left++; // increment left pointer
    } else {
      right--; // decrement right pointer
    }
  }
}
//time complexity: O(n)
console.log(twoSumUsingTwoPointers([2,7,11,15], 9));

function twoSumusingHashmap(arr, targetSum) {
    var hashMap = {};
    for(var i = 0; i < arr.length; i++) {
        var complement = targetSum - arr[i];
        if(hashMap[complement] !== undefined) {
            return [hashMap[complement], i];
        }
        hashMap[arr[i]] = i;
    }
}
console.log(twoSumusingHashmap([2,7,11,15], 9));


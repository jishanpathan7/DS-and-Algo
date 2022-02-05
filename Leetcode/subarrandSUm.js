//GIven an array of integers of length n and a number k, 
//the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by k.
//input format:
//first line contains n and k
//second line contains n integers
//output format:
//print the count of the longest possible subarrays with the sum of its elements not divisible by k.
//input:
//4 3
//2 3 4 6
//output:
//1
//Explaination:
//There is only one longest possible subarray of size 3 i.e. {3, 4, 6} having a sum 13, which is not divisible by K = 3.

function findLongestSubarray(arr, k) {
    var i = 0;
    var j = 0;
    var sum = 0;
    var max = 0;
    while (j < arr.length) {
        sum += arr[j];
        while (sum % k !== 0 && i <= j) {
            sum -= arr[i];
            i++;
        }
        max = Math.max(max, j - i + 1);
        j++;
    }
    return max;
}
console.log(findLongestSubarray([2, 3, 4, 6], 3));
// given an array that is a permutation of [0,1,2.....arr.length-1], we have to split 
// the array into some number of partitions such that when we sort those partitions,
// separately and concantenate them, the whole array is sorted.
// what is the maximum number of partitions we can split the array into?
// we can split the array into any number of partitions, but we have to make sure that
// when we concantenate the partitions, the whole array is sorted.
// we can do this by sorting the partitions and then concantenating them.
// Input format:
// first line contains an integer n, denoting the number of elements in the array
// second line contains n space separated integers, denoting the elements of the array
// Output format:
// print the maximum number of partitions we can split the array into
// Constraints:
// 1 ≤ n ≤ 10
// arr will be a permutation of [0,1,2,...,n-1]
// Sample input:
// 5
// 1 0 2 3 4
// Sample output:
// 4
// Explanation:
// we can split the array into 2 partitions, each of which is sorted.
// however splitting into [1,0],[2],[3], [4]is the highest number of partitions we can split the array into. i.e. 4 partitions.

function countMaxPartitions(arr) {
    let n = arr.length;
    let max = 0;
    for (let i = 0; i < n; i++) {
        let count = 0;
        let j = i;
        while (j < n && arr[j] < arr[i]) {
            count++;
            j++;
        }
        max = Math.max(max, count);
    }
    return max;
}
console.log(countMaxPartitions([1, 0, 2, 3, 4]));
//Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
//Example 1:
//Input:nums = [1,1,1], k = 2
//Output: 2
//Note:
//The length of the array is in range [1, 20,000].
//The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

function subarraySum(nums, k) {
    var ret = 0;
    for(var i =0; i<nums.length; i++){
        var sum = 0;
        for(var j = i; j<nums.length; j++){
            sum += nums[j];
            if(sum === k){
                ret++;
            }
        }
    }
    return ret;
}
console.log(subarraySum([1, 1, 1], 2));
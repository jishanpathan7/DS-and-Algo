//Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//Note:
//The solution set must not contain duplicate triplets.
//Example:
//Given array nums = [-1, 0, 1, 2, -1, -4],
//A solution set is:
//[
//  [-1, 0, 1],
//  [-1, -1, 2]
//]

function threeSum(nums) {
    var ret = [];
    nums.sort(function(a, b){
        return a - b;
    });
    for(var i = 0; i<nums.length; i++){
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        var left = i + 1;
        var right = nums.length - 1;
        while(left < right){
            var sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                ret.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(left < right && nums[left] === nums[left-1]){
                    left++;
                }
                while(left < right && nums[right] === nums[right+1]){
                    right--;
                }
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }
        }
    }
    return ret;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
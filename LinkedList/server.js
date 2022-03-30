// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

function searchinSortedRotatedArray(nums, target) {
    for(let i of nums)
        if(i == target) return true
    return false
}

console.log(searchinSortedRotatedArray([1,0,1,1,1], 0));

var search = function(nums, target) {
    let start = 0, end = nums.length-1 
    while(start <= end){
        let mid = start + Math.floor((end - start) / 2)
        if(nums[mid] == target) return true
        if(nums[mid] > nums[start]){
            if(nums[mid] > target && nums[start] <= target)    end = mid - 1
            else    start = mid + 1
        } else if(nums[mid] < nums[start]){
            if(nums[mid] < target && nums[start] > target)  start = mid + 1
            else    end = mid - 1
        } else{
            start++
        }
    }
    return false
};                                                                                 
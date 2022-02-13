//Mergeing two packages


function twoSum(nums, target) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (hash[complement] !== undefined) {
      return [hash[complement], i];
    }
    hash[nums[i]] = i;
  }
}
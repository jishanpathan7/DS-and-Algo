
function moveZeroes(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
        } else {
            nums[i - count] = nums[i];
        }
    }
    for (let i = nums.length - count; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}
console.log(moveZeroes([0, 1, 0, 3, 12]))

function moveZeroes(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
        }
    }
    return nums;
}
// A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. 
// For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.
// Given shiftArr and an integer num, implement a 
// function shiftedArrSearch that finds and returns the index of num in shiftArr. 
// If num isn’t in shiftArr, return -1. Assume that the offset can be any value between 0 and arr.length - 1.

// Explain your solution and analyze its time and space complexities.
//Example:
// input:
// shiftArr = [5, 6, 7, 8, 9, 10, 1, 2, 3]                                                      
// num = 3
// output:
// 2

function shiftedArrSearch(shiftArr, num) {
    let left = 0;
    let right = shiftArr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(shiftArr[mid] === num){
            return mid;
        }
        if(shiftArr[mid] < shiftArr[right]){
            if(num > shiftArr[mid] && num <= shiftArr[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }else{
            if(num >= shiftArr[left] && num < shiftArr[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
    }
    return -1;
}
console.log(shiftedArrSearch([5, 6, 7, 8, 9, 10, 3, 1, 2], 3));
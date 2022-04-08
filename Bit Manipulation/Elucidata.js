// Find the first occurrence
// Given an list of number of candies in a bag,
// find the find the first bag with x number of candies.
// Example: list = [11, 8, 8, 8, 5, 5, 4, 4, 1], x = 8 .
// Here the answer should be 1 i.e. the index of first occurrence of count 8. 
//The bags are arranged in decending order of number of candies per bag.



function findFirstOccurrence(arr, x) {
   for(var i = 0; i < arr.length; i++) {
       if(arr[i] === x) {
           return i;
       }
   }
    return -1;
}
console.log(findFirstOccurrence([11, 8, 8, 8, 5, 5, 4, 4, 1], 8));
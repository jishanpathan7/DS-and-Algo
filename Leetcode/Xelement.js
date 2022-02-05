//Given an array of n elements and k,
//find the number from the array which is just greater than the given number.
//If no such number exists, return -1.
//input:
//[1,2,3,4,5]
//3
//output:
//4

function findGreater(arr, k) {
    var i = 0;
    var j = arr.length - 1;
    var mid = 0;
    while (i <= j) {
        mid = Math.floor((i + j) / 2); //mid = Math.floor((i+j)/2);
        //if mid is greater than k, then search in left side
        if (arr[mid] > k) {
            j = mid - 1; 
        } else {
            //if mid is less than k, then search in right side
            i = mid + 1;
        }
    }
    if (i >= arr.length) { //if i is greater than array length, then return -1
        return -1;
    }
    return arr[i]; //return the element at i
}
console.log(findGreater([1, 2, 3, 4, 5], 3));
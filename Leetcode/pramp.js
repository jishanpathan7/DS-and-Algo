// Pancake Sort
// Given an array of integers arr:

// Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
// Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.
// Example:

// input:  arr = [1, 5, 4, 3, 2]

// output: [1, 2, 3, 4, 5] # to clarify, this is pancakeSort's output
// Analyze the time and space complexities of your solution.

// Note: it’s called pancake sort because it resembles sorting pancakes on a plate with a spatula, where you can only use the spatula to flip some of the top pancakes in the plate. To read more about the problem, see the Pancake Sorting Wikipedia page.

// Constraints:

// [time limit] 5000ms

// [input] array.integer arr

// [input] integer k

// 0 ≤ k
// [output] array.integer

// JavaScript program to sort array using pancake sort

// Reverses arr[0..i]
function flip(arr, i)
{
    let temp, start = 0;
    while (start < i)
    {
        temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
        start++;
        i--;
    }
}

// Returns index of the
// maximum element in
// arr[0..n-1]
function findMax(arr, n)
{
    let mi, i;
    for (mi = 0, i = 0; i < n; ++i)
        if (arr[i] > arr[mi])
            mi = i;
            
    return mi;
}

// The main function that
// sorts given array using
// flip operations
function pancakeSort(arr, n)
{
    
    // Start from the complete
    // array and one by one
    // reduce current size by one
    for (let curr_size = n; curr_size > 1; --curr_size)
    {
        
        // Find index of the
        // maximum element in
        // arr[0..curr_size-1]
        let mi = findMax(arr, curr_size);

        // Move the maximum element
        // to end of current array
        // if it's not already at
        // the end
        if (mi != curr_size - 1)
        {
            // To move at the end,
            // first move maximum
            // number to beginning
            flip(arr, mi);

            // Now move the maximum
            // number to end by
            // reversing current array
            flip(arr, curr_size - 1);
        }
    }
    
    return 0;
}

// Utility function to print
// array arr[]
function printArray(arr, arr_size)
{
    for (let i = 0; i < arr_size; i++)
        console.log(arr[i] + " ");
        
    console.log("");
}

let arr = [23, 10, 20, 11, 12, 6, 7];
let n = arr.length;

pancakeSort(arr, n);
console.log("Sorted Array: " + "");
printArray(arr, n);



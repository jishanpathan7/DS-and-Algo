//given an array of length N. sort the array into wave-like pattern.
//sample input:
//[1,2,3,4,5,6,7,8]
//output:
//[1,3,2,6,5,4,8,7]

function wave(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i += 2) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}
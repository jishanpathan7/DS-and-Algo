// Teena is very good at competitive programming, she solved enough problems on arrays and her friend wants to test her knowledge in arrays, so gave her following task :

// The problem is given an array A having N integers, for each element i (1 <= i <= N), find x+y  where x is the largest number less than i such that A[x]>A[i] and y is the smallest number greater than i such that A[y]>A[i].


function solve(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let x = -1;
        let y = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[i]) {
                x = j;
                break;
            }
        }
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                y = j;
                break;
            }
        }
        result.push([x, y]);
    }
    return result;
}
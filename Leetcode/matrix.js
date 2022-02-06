//given a matrix of integers, find the sum of diagonal elements.
//input:
//[[1,2,3],
// [4,5,6],
// [7,8,9]]
//output:
//15

function sumOfDiagonal(matrix) {
    var sum = 0;
    var i = 0;
    var j = 0;
    while (i < matrix.length) {
        sum += matrix[i][i];
        i++;
    }
    return sum;
}
console.log(sumOfDiagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
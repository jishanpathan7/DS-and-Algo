//given a n x n matrix representing an image, rotate the image by 90 degrees (clockwise).
//example:
//input:
//[
//  [1,2,3],
//  [4,5,6],
//  [7,8,9]
//]
//output:
//[
//  [7,4,1],7
//  [8,5,2],
//  [9,6,3]
//]

function rotateMatrix(matrix) {
    let n = matrix.length;
    var out = "";
    for(var c=n-1; c >=0; c--) {
        for(var r=0; r < n; r++) {
            //console.log(matrix[r][c]);
            //out.push(matrix[r][c]);
            out += matrix[r][c] + " ";
        }
    }
return out;
    }
    console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]));
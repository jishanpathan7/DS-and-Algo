//determine if a 9 x 9 sudoku is valid.
//only the filled cells need to be validated according to the following rules:
//Each row must contain the digits 1-9 without repetition.
//Each column must contain the digits 1-9 without repetition.
//Each of the nine 3 x 3 sub-boxes of the grid must contains the digits 1-9 without repetition.
//The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
//A partially filled sudoku which is valid.
//Example 1:
//Input:
// board = 
//[ ["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

function validSudoku(board) {
    let row = [], col = [], box = [];
    for (let i = 0; i < 9; i++) {
        row[i] = new Set();
        col[i] = new Set();
        box[i] = new Set();
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
        if (board[i][j] !== '.') {
            let num = parseInt(board[i][j]);
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (row[i].has(num) || col[j].has(num) || box[boxIndex].has(num)) {
            return false;
            }
            row[i].add(num);
            col[j].add(num);
            box[boxIndex].add(num);
        }
        }
    }   
    return true;

}
console.log(validSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))
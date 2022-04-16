// You are given a string of length 2N consisting of only digits from 0 to 9. You can make a move to choose an arbitrary position and replace the digit in that position with any digit from 0 to 9.

// Task

// Determine the minimum number moves required to make the sum of the first N digits equal to the sum of the N digits that follow.

// Note: 1-based indexing is used.

// Example

// Assumptions

// N = 3
// S = 111279
// Approach

// Change S[1] from 1 to 9
// Change S[5] from 7 to 0
// Now, S = 911209

// Therefore, the sum of S[1] to S[3] = 9 + 1 + 1 = 11 and the sum of S[4] to S[6] = 2 + 0 + 9 = 11.

// Hence, the minimum number of moves required is 2.

// Note: There can be other possible ways to achieve the answer, but we can not get the required result sum in less than 2 changes.

// Function description

// Complete the function solve provided in the editor. This function takes the following 2 parameters and returns the answer:

// N: Represents an integer denoting N
// S: Represents a string denoting S
// Input format

// Note: This is the input format you must use to provide custom input (available above the Compile and Test button).

// The first line contains T denoting the number of test cases. T also specifies the number of times you have to run the solve function on a different set of inputs.
// For each test case:
// The first line contains an integer N.
// The next line contains a string S of length 2N.
// Output format

// For each test case, print the answer in a new line.


function solve(n, s) {
    var sum = 0;
    var count = 0;
    for(var i = 0; i<s.length; i++){
        sum += parseInt(s[i]);
    }
    for(var i = 0; i<s.length; i++){
        if(sum === 0){
            return count;
        }
        if(i%2 === 0){
            sum -= parseInt(s[i]);
        }else{
            sum += parseInt(s[i]);
        }
        count++;
    }
    return count;
}
console.log(solve(3, "111279"));
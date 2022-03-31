// You are given N which is the number of different types of operation you need to perform on a stack. There are 3 different types of operations:

// PUSH V: Here V is an integer which you need to push in the stack

// POP: Here POP out the top element from stack. (In case stack is empty print "EMPTY")

// MIN: Print the minimum value present in the stack

// Input
// Input Format

// First line contains N which is the number of operations you need to perform on stack

// Next N line contains one of the 3 operations mentioned above

// Constraints

// N < 1000000

// V < 100

// Output
// Output Format

// The output consists of a line containing an integer with the smallest present value in the stack for queries of type "MIN" or "EMPTY" for "MIN" and "POP" operations when the stack is empty.

function findMin(N, queries) {
  let stack = [];
  let min = 0;
  for (let i = 0; i < N; i++) {
    let query = queries[i];
    if (query === 'PUSH') {
      stack.push(i);
    } else if (query === 'POP') {
      if (stack.length === 0) {
        min = 0;
      } else {
        stack.pop();
        if (stack.length === 0) {
          min = 0;
        } else {
          min = stack[stack.length - 1];
        }
      }
    } else if (query === 'MIN') {
      if (stack.length === 0) {
        min = 0;
      } else {
        min = stack[stack.length - 1];
      }
    }
  }
  return min;
}
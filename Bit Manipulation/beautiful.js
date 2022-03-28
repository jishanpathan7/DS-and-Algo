// You are given two integers  and . Your task is to determine the sum of all the beautiful numbers from the range .

// A number represents a beautiful number if it satisfies the following condition:

// If the number becomes 1 at some point by replacing it repeatedly with the sum of squares of its digits.
// Note: If the number never becomes 1, then the provided number is not a beautiful number.
// For further clarification, please refer to the explanation of the sample test case.

// Example

// Consider L=1, R = 2. You have to determine the sum of all the beautiful numbers from the range .

// Here the answer is 1 as 2 is not a beautiful number.
// Consider L=1, R = 3. You have to determine the sum of all the beautiful numbers from the range .
//sample input
// 1
//31 32
//output
//63
//explaination:
//for this case, both 31 and 32 can be reduced to 1 by replacing them with the sum of their squares.
//so the answer is 63.

function beautiful(l, r) {
  let sum = 0;
  for (let i = l; i <= r; i++) {
    if (isBeautiful(i)) {
      sum += i;
    }
  }
  return sum;
}

function isBeautiful(n) {
  let num = n;
  while (num !== 1) {
    num = getSumOfSquares(num);
    if (num === 1) {
      return true;
    }
  }
  return false;
}

function getSumOfSquares(n) {
  let sum = 0;
  while (n > 0) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return sum;
}
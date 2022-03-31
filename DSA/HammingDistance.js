// Alex has two integers x and y which he received from his two friends. Find out the hamming distance so that he can know how much different are these two integers from each other.

// Hamming distance (between two strings of equal length) here is defined as the number of positions at which the corresponding bits are different.

function hammingDistance(a, b) {
  let xor = a ^ b;
  let count = 0;
  while (xor) {
    count++;
    xor &= xor - 1;
  }
  return count;
}
console.log(hammingDistance(0,3));
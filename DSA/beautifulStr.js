// //A string is beautiful if it has equal number of a,b,and c in it.

// Example "abc" , "aabbcc" , "dabc" , "" are beautiful.

// Given a string of alphabets containing only lowercas aplhabets (a-z), output the number of non-empty beautiful substring of the given string.
//input format
//First line contains a string S
//constraints
//1<=S<=100
//Output format
//for each query print the number of non-empty beautiful substring of the given string

function beautifulStrings(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let charCount = str.split(char).length - 1;
    let charCount2 = str.split(char).length - 2;
    if (charCount !== charCount2) {
      count++;
    }
  }
  return count;
}
console.log(beautifulStrings('abc'));
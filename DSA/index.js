
// // function isPalindrome(str) {
// //   var len = str.length;
// //   for (var i = 0; i < len / 2; i++) {
// //     if (str[i] !== str[len - i - 1]) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }
// // console.log(isPalindrome('madam'));

// //time complexity of this algorithm is O(n)
// //space complexity of this algorithm is O(1)


// function makePalindrome(str) { //O(n)
//   let len = str.length; //
//   if(len ===1) // if length is 1 then it is palindrome
//   return true; 
//   let i = 0;
//  let j = len-1;
//  while(j >= i){ //we are comparing the first and last element of the string
//    if(str[i] !== str[j]){ // if they are not equal then we are returning false
//        return false; // and breaking the loop
//     i++; // if they are equal then we are incrementing i and j
//     j--; 
//    }
//    return true; // if they are equal then we are returning true
//  }
// }

// function noAppend(s) { // function to check if the string is palindrome or not
//     if(makePalindrome(s.split(""))){  //we are splitting the string and passing it to makePalindrome function for checking if it is palindrome or not
//         return 0; // if it is palindrome then we are returning 0
//     }
//     s = s.substring(1); // if it is not palindrome then we are removing the first element of the string and passing it to the function again
//     return 1 + noAppend(s); // and returning the value of the function
// }

// console.log(noAppend("wetgorm"));


                



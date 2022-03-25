//you have give na large number and you need to plus one
//example:
//input: [1,2,3]
//output: [1,2,4]
//input: [9,9,9]
//output: [1,0,0,0]
//input: [9,9,9,9]
//output: [1,0,0,0,0]
//find the solution wihtout using extra space and inbuilt methods

function plusOne(arr) {
  var carry = 1; //for carrying the 1 to the next digit
  for(let i = arr.length-1; i >= 0; i--) {
   
    //start from the last digit for the array and move backwards
    if(arr[i] + carry > 9) { //if the sum of the digit and carry is greater than 9 then we need to carry 1 to the next digit
      arr[i] = 0; //set the digit to 0
      carry = 1; //carry 1 to the next digit
    } else { //if the sum of the digit and carry is less than 9 then we don't need to carry 1 to the next digit and we can just add the digit to the sum and break the loop
      arr[i] += carry; //add the carry to the digit
      carry = 0; //set the carry to 0 for the next digit
    }
  }
  if(carry === 1) { //if the carry is still 1 then we need to add a new digit to the front of the array
    arr.unshift(); //add a new digit to the front of the array and set the carry to 0 for the next digit 
  }
  return arr; //return the array

}
console.log(plusOne([1,2,3,4]))
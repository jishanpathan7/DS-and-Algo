//given an array ,roate the array to the right by k steps, where k is non-negative.
//input: [1,2,3,4,5,6,7] and k = 3
//output: [5,6,7,1,2,3,4]

function rotateArrusingDP(arr,k){
let n = arr.length;
let temp =[...arr];
for(let i=0; i<n; i++){
    arr[(i+k)%n] = temp[i];

}
return arr;
}
console.log(rotateArrusingDP([1,2,3,4,5,6,7],3));

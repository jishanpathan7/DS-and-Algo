//given an unsorted array of integers, sort the array using merge sort.
//input:
//[5,4,1,6,3,2]
//output:
//[1,2,3,4,5,6]
//input:
//[5,4,1,6,3,2]
//o

function mergeSort(arr){
  if(arr.length === 1){
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
console.log(mergeSort([5,4,1,6,3,2]));


function merge(left, right){
    let result = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
        result.push(left.shift());
        }else{
        result.push(right.shift());
        }
    }
    return result.concat(left, right);
    }
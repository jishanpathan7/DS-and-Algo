//Given a static-sizedd array, move all zeroes in the array to the end of the array.
//you should preserve the relative order of items in the array.

const moveZeroes = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        }
    }
    for (let i = 0; i < count; i++) {
        arr.splice(arr.indexOf(0), 1);
    }
 for(let i = 0; i < count; i++){
        arr.push(0);
    }
    return arr;
}
console.log(moveZeroes([0, 1, 0, 3, 12]));
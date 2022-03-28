//given a array , find all subsets of the array.

function subsets(arr) {
    let result = [];
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            result.push(arr.slice(i, j));
            max = Math.max(max, j - i);
        }
    }
    return result;
}
console.log(subsets([1, 2, 3]));


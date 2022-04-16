
function flatArrusingBruteForce(arr, depth) {
    let n = arr.length;
    let temp = [];
    for (let i = 0; i < n; i++) {
        if (Array.isArray(arr[i])) {
        temp = temp.concat(flatArrusingBruteForce(arr[i], depth ));
        } else {
        temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(flatArrusingBruteForce([1, 2, 3, [4, 5,[1,[2], 4, 5], 6]],1));
 

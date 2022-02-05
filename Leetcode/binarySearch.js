function binarySearch(arr,key) {
    var low = 0;
    var high = arr.length - 1;
    var mid = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (key === arr[mid]) {
            return mid;
        }
        if (key < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 3));
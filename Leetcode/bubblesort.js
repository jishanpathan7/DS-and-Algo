function bubbleSort(arr,n) {
    var i = 0;
    var j = 0;
    var temp = 0;
    while (i < n) {
        j = 0;
        while (j < n - i - 1) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 4, 1, 6, 3, 2], 6));
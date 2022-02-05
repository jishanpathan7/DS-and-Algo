function runProgram(input) {
    input = input.trim().split("\n");
    var t = +input[0];
    var step = 1;
    while (t > 0) {
        var n = +input[step++];
        var d = n;
        var arr = [];
        while (n > 0) {
            arr.push(input[step++].trim().split(" ").map(Number));
            n--;
        }
        arr.sort(function (a, b) {
            if (a[1] != b[1]) {
                return a[1] - b[1]
            }
            return a[0] - b[0];
        });
        var arr1 = [];
        for (var i = 0; i < d; i++) {
            arr1[i] = 0;
        }
        var maxi = 0;
        for (var i = 0; i < d; i++) {
            var max = 0;
            for (var j = 0; j < i; j++) {
                if (arr[j][1] < arr[i][1] && arr[j][0] < arr[i][0]) {
                    if (max < arr1[j]) {
                        max = arr1[j];
                    }
                }
            }
            arr1[i] = arr[i][1] + max;
            if (maxi < arr1[i]) {
                maxi = arr1[i];
            }
        }
        console.log(maxi)
        t--;
    }
}

if (process.env.USERNAME === "pjish") {
    runProgram(`2
    3
    4 3
    1 4
    3 2
    5
    5 6
    4 3
    1 2
    7 5
    3 4`);
  } else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});
}
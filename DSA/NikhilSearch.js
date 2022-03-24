// Nikhil and his friend Sachin are on a quest to find the answer to Life.

// In order to complete it, they need to answer Q queries on an array A having N integers. The queries can be of the following two types:

// 0 x: Find the number of numbers in A which are not less than x.

// 1 x: Find the number of numbers in A which are greater than x.

// Help them complete the quest.

// Input Format

// The first line consists of a single integer denoting N.

// The second line consists of N space separated integers denoting the array A.

// The third line consists of a single integer denoting Q.

// Each of the following Q lines consists of a query of one of the given two types.

// Constraints

// 1<= N <= 100000

// 1<=Q<=300000

// 1<= elements of array, x < 1000000000
// Output
// For each query print the required answer in a new line.


function runProgram(input) {
    input = input.split('\n');
    let n = parseInt(input[0]);
    let arr = input[1].split(' ').map(x => parseInt(x));
    let q = parseInt(input[2]);
    let queries = [];
    for (let i = 3; i < input.length; i++) {
        queries.push(input[i].split(' '));
    }
   console.log(solveUsingBinarySearch(n,arr, q, queries));
    
    function solveUsingBinarySearch(n,arr,q,queries) {
        let result = [];
        for (let i = 0; i < q; i++) {
            let query = queries[i];
            if (query[0] === '0') {
                let x = parseInt(query[1]);
                let count = 0;
                let low = 0;
                let high = n - 1;
                while (low <= high) {
                    let mid = Math.floor((low + high) / 2);
                    if (arr[mid] >= x) {
                        high = mid - 1;
                    } else {
                        low = mid + 1;
                    }
                }
                result.push(low);
            } else {
                let x = parseInt(query[1]);
                let count = 0;
                let low = 0;
                let high = n - 1;
                while (low <= high) {
                    let mid = Math.floor((low + high) / 2);
                    if (arr[mid] > x) {
                        high = mid - 1;
                    } else {
                        low = mid + 1;
                    }
                }
                result.push(high);
            }
        }
        return result;
    }
}
  if (process.env.USERNAME === "pjish") {
    runProgram(``);
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
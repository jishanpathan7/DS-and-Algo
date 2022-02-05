
function runProgram(input) {
    var  input = input.trim().split("\n");
     var [n,t] = input[0].split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var line = 2;
    for(var i =0; i < t; i++) {
        var [l , r , v] = input[line++].trim().split(" ").map(Number);
        frquency(n,arr,l, r, v)
    }
       function  frquency(n,arr,l, r, v){
           var count = 0;
           for(var i =l-1; i < r; i++) {
               if(arr[i] == v) {
                   count++
               }
           }
           console.log(count)
       }
 }
 
 if (process.env.USERNAME === "pjish") {
   runProgram(`6 2
   1 5 3 2 3 2
   3 6 2
   4 4 2`);
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
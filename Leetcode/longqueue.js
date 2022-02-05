function runProgram(input) {
    // Write code here
  var input = input.trim().split("\n")
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number)
  longqueue(n,arr)
  
  function longqueue(n,arr){
      //console.log(n,arr)
      var count = 0;
      for(var i =0; i<n; i++){
          if(arr[i] <= arr[i+1]) {
             continue     
          } else {
              count++;
          }
      }
      console.log(count)
  }
  }
  if (process.env.USERNAME === "pjish") {
    runProgram(`
    6
    1 2 4 3 5 8`);
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
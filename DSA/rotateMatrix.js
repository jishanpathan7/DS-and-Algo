function rotateBy90(R, matrix){
    //write code here
   for (var c = R- 1; c >=0; c--) {
    var ans = "";
    for(var r =0; r < R; r++) {
      ans += matrix[r][c] + " ";
    } 
    console.log(ans);
  }
}
rotateBy90(3, [[1,2,3],[4,5,6],[7,8,9]]);
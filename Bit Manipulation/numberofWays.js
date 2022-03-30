// You are given a number N, you've to find the number of different ways to write it as the sum of 1, 3 and 4.

function sumusingdp(n) {
    var dp = [];
    dp.length = 10;
    dp.fill(0);
 
  
    dp[0] = dp[1] = dp[2] = 1;
    dp[3] = 2;
 
   
    for(var i = 4; i <= num; i++)
        dp[i] = dp[i - 1] + dp[i - 3] +
                dp[i - 4];
 
    return dp[num];
}
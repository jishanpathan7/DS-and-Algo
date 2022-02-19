function knapsack(weights, values, capacity) {
    var n = weights.length;
    var dp = [];
    for (var i = 0; i <= capacity; i++) {
        dp[i] = [];
        for (var j = 0; j <= n; j++) {
            dp[i][j] = 0;
        }
    }
    for (var i = 0; i <= capacity; i++) {
        for (var j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            }
            else if (weights[j - 1] <= i) {
                dp[i][j] = Math.max(dp[i][j - 1], values[j - 1] + dp[i - weights[j - 1]][j - 1]);
            }
            else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    return dp[capacity][n];
}
console.log(knapsack([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 5));
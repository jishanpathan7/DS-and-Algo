// There are 100 different types of caps each having a unique id from 1 to 100.
// Also, there are 'n' persons each having a collection of a variable number of caps.
// One day all of these persons decide to go in a party wearing a cap but to look
// unique they decided that none of them will wear the same type of cap. So, count
// the total number of arrangements or ways such that none of them is wearing the
// same type of cap.

function countWays(n, caps) {
    var dp = new Array(n + 1);
    dp[0] = 1;
    for (var i = 1; i <= n; i++) {
        dp[i] = 0;
        for (var j = 0; j < i; j++) {
            if (caps[j] !== caps[i]) {
                dp[i] += dp[j];
            }
        }
    }
    return dp[n];
}
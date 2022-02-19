function longestPalindromicSubstring(str) {
let n = str.length;

let maxLength = 1;
let start = 0;
for(let i =0; i < n; i++) {
    for(let j =i;  j < n; j++) {
        let flag =1;
        for(let k =0; k < j-i+1; k++) {
            if(str[i+k] !== str[j-k]) {
                flag = 0;
                if(flag !=0 && j-i+1 > maxLength) {
                    maxLength = j-i+1;
                    start = i;
                }
                   
                }
            }
            
        }

    }
    console.log("Longest palindromic substring is: " );
    printSubs(str,start,start+maxLength-1);
    return maxLength;
}

function printSubs(str,low,high) {
    for(let i=low; i<=high; i++) {
        console.log(str[i]);
    }
}
let str = "forgeeksskeegfor";
console.log(longestPalindromicSubstring(str));



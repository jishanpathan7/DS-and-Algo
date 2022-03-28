//given a string s,find all substrings of s in lexicographical order.

function allSubstrings(s){
    let result = [];
    let max = 0;
    for(let i = 0; i < s.length; i++){
        for(let j = i+1; j <= s.length; j++){
            result.push(s.slice(i,j));
            max = Math.max(max, j-i);
        }
    }
    return result;

}
console.log(allSubstrings("abc"));
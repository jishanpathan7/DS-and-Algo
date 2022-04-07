//write a function to find the longest common prefix string amongst an array of strings.
//if there is no common prefix, return an empty string "".
//input: ["flower","flow","flight"]
//output: "fl"
//input: ["dog","racecar","car"]
//output: ""

function  longestCommonPrefix(strs) {
    if(strs.length === 0) return "";
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, prefix.length - 1);
            if(prefix === "") return "";
        }
    }
    return prefix;
}
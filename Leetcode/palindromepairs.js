//given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.
//input: ["abcd","dcba","lls","s","sssll"]
//output: [[0,1],[1,0],[3,2],[2,4]]
//input: ["bat","tab","cat"]
//output: [[0,1],[1,0]]
//input: ["a","ab","aba",""]
//output: []
//input: ["a","aa","aaa","aaaa"]
//output: [[0,1],[1,2],[2,0]]

function palindromePairs(words) {
    let result = []
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words.length; j++){
            if(i !== j){
                let str = words[i] + words[j]
                if(isPalindrome(str)){
                    result.push([i,j])
                }
            }
        }
    }
    return result
}

function isPalindrome(str){
    let left = 0
    let right = str.length - 1
    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
}
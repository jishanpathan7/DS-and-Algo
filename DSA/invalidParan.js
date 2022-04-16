//Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.
// Note: The input string may contain letters other than the parentheses ( and ).
// Example 1:
// Input: "()())()"
// Output: ["()()()", "(())()"]
// Example 2:
// Input: "(a)())()"
// Output: ["(a)()()", "(a())()"]
// Example 3:
// Input: ")("
// Output: [""]

function removeInvalidParentheses(s) {
  var queue = [];
  var visited = new Set();
  queue.push(s);
  var result = [];
  var found = false;
    while(queue.length > 0){
        var str = queue.shift();
        if(isValid(str)){
            result.push(str);
            found = true;
        }
        if(found){
            continue;
        }
        for(var i = 0; i<str.length; i++){
            if(str[i] === '(' || str[i] === ')'){
                var temp = str.slice(0, i) + str.slice(i+1, s.length);
                if(!visited.has(temp)){
                    queue.push(temp);
                    visited.add(temp);
                }
            }
        }
    }
    return result;  
}

function isValid(s){
    var stack = [];
    var map = {
        '(':')',
        '[':']',
        '{':'}'
    };
    for(var i = 0; i<s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i]);
        }else if(s[i] === ')' || s[i] === ']' || s[i] === '}'){
            if(stack.length === 0){
                return false;
            }
            if(map[stack.pop()] !== s[i]){
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(removeInvalidParentheses("()())()"));
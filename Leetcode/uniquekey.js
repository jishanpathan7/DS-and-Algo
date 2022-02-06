//given a string with duplicate characters, find the first unique character, in the string.
//input:
//"abca"
//output:
//"b"

function findUnique(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        if(obj[str[i]]==undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }
for (var key in obj) {
    if (obj[key] == 1) {
        console.log(key);
  
    }
}
}
console.log(findUnique("abca"));
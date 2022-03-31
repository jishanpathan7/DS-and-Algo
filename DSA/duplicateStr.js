// Given a string of lowercase characters in range ascii[‘a’..’z’].

// You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

// For instance, the string aab could be shortened to b in one operation.

// Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

// Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).


function removePairs(str) {

    var flag = true;
    var s = str.split('');

    while (flag) {
        flag = false;

        for (var i = 0; i < s.length; i++) {
            if (s[i] == s[i + 1]) {
                s[i] = '';
                s[i + 1] = '';
                i++;
                flag = true;
            }
        }
        s = s.join('').split('');
        //console.log(s)
    }

    if (s.length !== 0) {
        console.log(s.join(""))
    } else {
        console.log("Empty String")
    }
}
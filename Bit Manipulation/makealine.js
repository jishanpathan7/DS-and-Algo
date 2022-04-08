// We have a long queue in front of a store, and everyone has a sticker on their Tshirt (First letter of their names), We have to sort that line according to their Tag. For ex: ['l', 'z', 'c' , 'a', 'c', 'c','z','x','z','d'] => this the queue of people with given tags (smallcase alphabets). The Required Output would be ['a','c','c','c','d','l','x','z','z','z'].
//  Conditions: Line can be very long (Range of 10^6) , Tag can be only a smallcase alphabet.
//


function sortsmallcaseLetters(arr) {
    var arr = arr.sort();
    var result = [];
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            temp.push(arr[i]);
            result.push(...temp);
            temp = [];
        } else {
            temp.push(arr[i]);
        }
    }
    return result;
}
console.log(sortsmallcaseLettersuingBruteForce(['l', 'z', 'c', 'a', 'c', 'c', 'z', 'x', 'z', 'd']));
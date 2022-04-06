// Given a string S consists of only small case letters. Each letter has a weight i.e the weight of a is 0,b is 1 c is 2 and so on..(a=>0,b=>1,...z=>25) .

// Your task is to make a new string whose indexes are square of the weights of the given string.

// Hint: use modulo if the weight goes out of range.

//input format
//First line contains a string S

//constraints
//1<=S<=100

//Output format
//print new string in a single line

//sample input
//abcd
//sample output
//abej

let map = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25
};

function square(str) {
    let arr = str.split('');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(map[arr[i]] * map[arr[i]]);
    }
  for(var key in map) {
  for(var i = 0; i < result.length; i++) {
    if(map[key] === result[i]) {
      result[i] = key;
    }
  }

  
}
    return result.join('');
}
console.log(square('abcd'));
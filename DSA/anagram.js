// Given N strings , Pasha needs to group anagrams together.

// Note:- Sequence doesn't matter.
//input:
//1 <=T<= 10
//1 <= N <= 100
//1 <= S[i] <= 10
//output:
//output an integer N and N strings which need to be together for every group. Repeat this for every test case.


function gropsAnagrams(arr) {
  
  let map = {};
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].split('').sort().join('');
        console.log(typeof sorted);
        if (map[sorted]) {
            map[sorted].push(arr[i]);
        } else {
            map[sorted] = [arr[i]];
        }
        //console.log(map);
    }
  for (let key in map) {
      count++;
     console.log(map[key].length);
  }
    return count;

}
console.log(gropsAnagrams(["abc","abc","def"]));
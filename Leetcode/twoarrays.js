//given two arrays, find the number of elements in common. print those elements.
//Input Format
// array1 = [1, 2,2,1]
// array2 = [2,2]
//Output Format
// [2,2]

// function commonElements(nums1, nums2) {
//     let larger = nums1.length >= nums2.length ? nums1 : nums2; //check which array is larger
//   let smaller = nums1.length < nums2.length && larger != nums1 ? nums1 : nums2; //check which array is smaller
//   let frequencyMap = {}; //for storing the frequency of each element in larger array
//   let output = []; //for storing the output

//   for (let i = 0; i < larger.length; i++) {
//     if (frequencyMap[larger[i]]) {
//       frequencyMap[larger[i]]++;
//     } else {
//       frequencyMap[larger[i]] = 1;
//     }
//   }

//   for (let i = 0; i < smaller.length; i++) {
//     if (frequencyMap[smaller[i]]) {
//       output.push(smaller[i]); // push the element to the output array
//       frequencyMap[smaller[i]]--; // decrement the frequency
//     }
//   }

//   return output;
// }
// console.log(commonElements([1,2,2,1], [2,2]));

function twoArr(arr1, arr2) {
  var out = [];
  for(let i =0; i < arr1.length-1; i++) {
    for(var j =0; j < arr2.length-1; j++) {
      if(arr1[i]==arr2[j]) {
        out.push(arr1[i])
      }
    }
  }
  return out;
}
console.log(twoArr([1,2,2,1],[2,2]))
//time complexity O(n)
//space complexity O(n)
function twoArrs(arr1, arr2) {
  var out = [];
  var map = {};
  for(let i =0; i < arr1.length-1; i++) {
    if(map[arr1[i]]) {
      map[arr1[i]]++;
    } else {
      map[arr1[i]] = 1;
    }
  }
  for(let i =0; i < arr2.length-1; i++) {
    if(map[arr2[i]]) {
      out.push(arr2[i])
      map[arr2[i]]--; //
    }
  }
  return out;
}
console.log(twoArrs([1,2,2,1],[2,2]))
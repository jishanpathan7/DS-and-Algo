//given two arrays, find the number of elements in common. print those elements.
//Input Format
// array1 = [1, 2,2,1]
// array2 = [2,2]
//Output Format
// [2,2]

function commonElements(nums1, nums2) {
    let larger = nums1.length >= nums2.length ? nums1 : nums2; //check which array is larger
  let smaller = nums1.length < nums2.length && larger != nums1 ? nums1 : nums2; //check which array is smaller
  let frequencyMap = {}; //for storing the frequency of each element in larger array
  let output = []; //for storing the output

  for (let i = 0; i < larger.length; i++) {
    if (frequencyMap[larger[i]]) {
      frequencyMap[larger[i]]++;
    } else {
      frequencyMap[larger[i]] = 1;
    }
  }

  for (let i = 0; i < smaller.length; i++) {
    if (frequencyMap[smaller[i]]) {
      output.push(smaller[i]); // push the element to the output array
      frequencyMap[smaller[i]]--; // decrement the frequency
    }
  }

  return output;
}
console.log(commonElements([1,2,2,1], [2,2]));
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

function mergeIntervals(intervals) {
  let n = intervals.length;
  let temp = [];
  for (let i = 0; i < n; i++) {
    if (temp.length === 0) {
      temp.push(intervals[i]);
    } else {
      let j = temp.length - 1;
      if (temp[j][1] >= intervals[i][0]) {
        temp[j][1] = Math.max(temp[j][1], intervals[i][1]);
      } else {
        temp.push(intervals[i]);
      }
    }
  }
  return temp;
}
/* 
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

 

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1
*/

// how do i know if there is overlap?

// input intervals
// compare current meeting to next meeting
// sort meetings by start time
// is there overlap?
const isOverlap = (int1, int2) => {
  // const start1 = int1[0]
  const end1 = int1[1]
  const start2 = int2[0]
  // const end2 = int2[1]
  return start2 < end1
}
// while there is overlap continue iterating
// when there is no overlap, subtract 1 from max rooms and move on to next interval
// loop

// business
// output number of rooms needed

const minMeetingRoom = (intervals) => {
  let rooms = intervals.length
  intervals.sort((a,b) => a[0] - b[0])
  for (let i = 0; i < intervals.length - 1; i++) {
    const currInt = intervals[i]
    for(let j = i + 1; j < intervals.length; j++) {
      // my next i is completely within my current i
      if (!isOverlap(intervals[i], intervals[j])) {
        if (intervals[j][1] > intervals[i][1]) {
          rooms --
        }
        break
      }
    }
  }
  return rooms
}


const input = [[9,10],[4,9],[4,17]]

console.log(minMeetingRoom(input))
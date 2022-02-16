
/* 
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

 

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1
*/



const minMeetingRooms = (intervals) => {
  let rooms = 0
  const starts = intervals.slice() 
  starts.sort((a,b) => a[0] - b[0])
  const ends = intervals
  ends.sort((a,b) => a[1] - b[1])
  // console.log(starts)
  // console.log(ends)
  let j = 0
  for (let i = 0; i < starts.length; i++) {
    const smallestRemainingStart = starts[i][0]
    const smallestRemainingEnd = ends[j][1]
    if (smallestRemainingStart < smallestRemainingEnd) {
      rooms ++
    } else {
      j++
    }
  }

  return rooms
}


const input = [[0,30],[5,10],[15,20]]

console.log(minMeetingRoom(input))
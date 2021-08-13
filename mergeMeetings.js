/*
Write a function mergeMeetingTimes() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.
For example, given:
 [
  { startTime: 1,  endTime: 2 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 9,  endTime: 10 },
  { startTime: 10, endTime: 12 },
]
your function would return:
 [
  { startTime: 1, endTime: 2 },
  { startTime: 3, endTime: 8 },
  { startTime: 9,  endTime: 10 },
 ]
 */
const sampleInput =  [
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 11 },
  { startTime: 9,  endTime: 10 },
  { startTime: 1,  endTime: 2 },
]

function mergeMeetingTimes(meetingTimes) {
  const mergedMeetings = []

  const sortedMeetingTimes = meetingTimes.sort((a,b) => {
    if (a.startTime === b.startTime) {
      return a.endTime - b.endTime
    }
    return a.startTime - b.startTime
  })
  // console.log(sortedMeetingTimes)
  mergedMeetings.push(sortedMeetingTimes[0])
  for (let i = 1; i < sortedMeetingTimes.length; i++) {
    const current = sortedMeetingTimes[i]
    const lastMerged = mergedMeetings[mergedMeetings.length-1]

    if (current.startTime <= lastMerged.endTime) {
      lastMerged.endTime = Math.max(current.endTime, lastMerged.endTime)
    } else {
      mergedMeetings.push(current)
    }
  }
  return mergedMeetings
}

console.log(mergeMeetingTimes(sampleInput))
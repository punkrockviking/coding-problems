/*
Determine the maximum number of additional diners who can potentially sit at the table without social distancing guidelines being violated for any new or existing diners, assuming that the existing diners cannot move and that the additional diners will cooperate to maximize how many of them can sit down.
Please take care to write a solution which runs within the time limit.
Constraints
1 \le N \le 10^{15}1≤N≤10 
15
 
1 \le K \le N1≤K≤N
1 \le M \le 500{,}0001≤M≤500,000
1 \le S_i \le N1≤S 
i
​
 ≤N

 In the first case, the cafeteria table has N = 10N=10 seats, with two diners currently at seats 22 and 66 respectively. The table initially looks as follows, with brackets covering the K = 1K=1 seat to the left and right of each existing diner that may not be taken.
  1 2 3 4 5 6 7 8 9 10
  [   ]   [   ]
Three additional diners may sit at seats 44, 88, and 1010 without violating the social distancing guidelines.
In the second case, only 11 additional diner is able to join the table, by sitting in any of the first 33 seats.
*/


/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */

/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
function getMaxAdditionalDinersCount(N, K, M, S) {
  // redefine variable names to easily understand which value is what
  const isAvailable = (currSeat, nextSeatedPerson) => {
    // return boolean
    // check if currSeat plus the social distance is < next seated person
    if (currSeat + distance < nextSeatedPerson) {
      return true
    } 
    return (nextSeatedPerson + distance < currSeat)
  }
  const changeCurrSeat = (seatedPerson) => {
   // return new int value for currSeat 
   return seatedPerson + distance + 1
  }
  const findNextSeatedPerson = (currSeat, seatIndex) => {
    // early return if the space we are looking at is less than nextSeatedPerson
    let seatNumber = sortedSeatingChart[seatIndex]
    if (currSeat + distance > seatNumber) {
      seatIndex ++
      seatNumber = sortedSeatingChart[seatIndex]
    } 
    return [seatIndex, seatNumber]
   
  }
  
  S.sort((a,b) => a-b)
  // console.log(S)
  const numSeats = N
  const distance = K
  const startingCount = M
  const sortedSeatingChart = S
  let addedSeats = 0
  
  // look at a seat (number between 1 and N)
  
  // keep track of what seat I am in (currSeat) and the next seat I am looking at (nextSeat)
  let currSeat = 1
  let occSeatIndex = 0
  let nextSeatedPerson = sortedSeatingChart[occSeatIndex]
  // can i place a person?
  while (currSeat <= numSeats) {
    if (isAvailable(currSeat, nextSeatedPerson)) {
      addedSeats ++
      // console.log('currSeat', currSeat, '||||| nextSeatedPerson', nextSeatedPerson)
      // console.log('addedSeats changed from',addedSeats - 1, 'to', addedSeats)
      currSeat = changeCurrSeat(currSeat) // currSeat += distance + 1 because i could place a person
    } else {
      currSeat = changeCurrSeat(nextSeatedPerson) // currSeat = nearest seated person + k + 1 because i could NOT place a person
    }
     if (occSeatIndex + 1 < startingCount) {
      [ occSeatIndex, nextSeatedPerson ] = findNextSeatedPerson(currSeat, occSeatIndex)
    }
  }
  // is there already somebody sitting there? if so move distance + 1 spaces and check again
  // yes if there are no people sitting within K spaces on right
  // if i placed a person then currSeat + K + 1 would be next place to check nextSeat
  // if i cannot place a person move currSeat (k + 1 spaces away from nearest seated person)
  // cannot place people outisde the end of the table
  
  // place a person at each space that meets criteria
  // keep a tally of how many MORE people I add to the table
  return addedSeats;
}

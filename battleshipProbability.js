// Battleship Probability

/*
You're playing Battleship on a grid of cells with RR rows and CC columns. There are 00 or more battleships on the grid, each occupying a single distinct cell. The cell in the iith row from the top and jjth column from the left either contains a battleship (G_{i,j} = 1G 
i,j
​
 =1) or doesn't (G_{i,j} = 0G 
i,j
​
 =0).
You're going to fire a single shot at a random cell in the grid. You'll choose this cell uniformly at random from the R*CR∗C possible cells. You're interested in the probability that the cell hit by your shot contains a battleship.
Your task is to implement the function getHitProbability(R, C, G) which returns this probability.
Note: Your return value must have an absolute or relative error of at most 10^{-6}10 
−6
  to be considered correct.
Constraints
1 \le R, C \le 1001≤R,C≤100
0 \le G_{i,j} \le 10≤G 
i,j
​
 ≤1
Sample test case #1
R = 2
C = 3
G = 0 0 1
    1 0 1
Expected Return Value = 0.50000000
Sample test case #2
R = 2
C = 2
G = 1 1
    1 1
Expected Return Value = 1.00000000
Sample Explanation
In the first case, 33 of the 66 cells in the grid contain battleships. Therefore, the probability that your shot will hit one of them is 3 / 6 = 0.53/6=0.5.
In the second case, all 44 cells contain battleships, resulting in a probability of 1.01.0 of hitting a battleship.
*/

/*
 * @param {number} R
 * @param {number} C
 * @param {number[][]} G
 * @return {number}
 */
function getHitProbability(R, C, G) {
  let shipSpaces = 0
  let totalSpaces = R * C
  // console.log(G)
  // iterate through G
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      // count number of 1's
      if (G[i][j] === 1){
        shipSpaces ++
      }
    }
  }
  // divide number of 1's by total number of spaces
  // return probability
  return shipSpaces / totalSpaces
}

let row = 2
let col = 3
let grid = [[0,0,1], [1,0,1]]

console.log(getHitProbability(row,col,grid))
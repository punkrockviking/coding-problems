/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

EX:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/

const climbStairs = function(n, memo = new Array()) {
  if (n < 4) {
    return n
  }
  if (memo[n]) {
    return memo[n]  
  }
  memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
  return memo[n]

  // calculate to the nth index of the fibbonacci sequence
  // let i = 1
  // let fib = [0, 1]
  // while (i <= n) {
  //   const prev = fib[i-1]
  //   const curr = fib[i]
  //   const next = prev + curr
  //   fib.push(next)
  //   i++
  // }
  // return fib[i]


  // 1,2,3,5,8,13,21,34,...
};

const start = Date.now()
const result = climbStairs(45)
const end = Date.now()
console.log(result, end - start, 'ms')
/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

// tracking low price, high price, and profit
// const maxProfit = function(prices) {
//   let lowestPrice = Infinity
//   let highestPrice = -Infinity
//   let curMaxProfit = 0
//     // iterate through
//   for (let i = 0; i < prices.length; i++) {
//     let curPrice = prices[i]
//     // track lowestPrice
//     lowestPrice = Math.min(lowestPrice, curPrice)
//     // track highestPrice after lowest price
//     highestPrice = Math.max(highestPrice, curPrice)
//     curMaxProfit = Math.max(curMaxProfit, highestPrice - lowestPrice)
//   }
//     // return profit
//   return curMaxProfit
// };

// only tracking low price and profit
var maxProfit = function(prices) {
    let minBuyPrice = prices[0]
    let maxProf = 0

    for (let i = 1; i < prices.length; i++) {
        const sellPrice = prices[i]
        maxProf = Math.max(maxProf, sellPrice - minBuyPrice)
        minBuyPrice = Math.min(minBuyPrice, prices[i])
    }

    return maxProf
};

console.log(maxProfit([7,6,4,3,1]))
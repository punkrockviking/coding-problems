/**
 * @param {number[]} prices
 * @return {number}
 */
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
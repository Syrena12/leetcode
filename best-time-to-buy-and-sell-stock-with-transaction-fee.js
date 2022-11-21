/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let profit=0;
    let minprice=prices[0];
    for(let i=0;i<prices.length;i++){
        minprice = Math.min(minprice,prices[i]);
        if(prices[i]>minprice+fee){
            profit += (prices[i]-minprice-fee);
            minprice = prices[i]-fee;
        }
    }
    return profit
};

maxProfit([1,3,7,5,10,3],3);
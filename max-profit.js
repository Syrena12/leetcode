var maxProfit = function(prices) {
    let min = Infinity;
    let profit=0;
    for(let i =0;i<prices.length;i++){
        min = Math.min(prices[i],min);
        let win =prices[i]-min;
        if(win>0){
            profit+=win;
            min = prices[i];
        }
    }
    return profit;
};

maxProfit([7,1,5,3,6,4]);
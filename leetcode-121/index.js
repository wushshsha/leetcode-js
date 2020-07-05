/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let length = prices.length
    let buy = prices[0]
    let sale = prices[0]
    let max = 0
    for(let i=1;i<length; i++){
        if(prices[i]>=buy){
            max = Math.max(max, prices[i]-buy)
        }else{
            buy = prices[i]
        }
    }
    return max
};
let data = [7,6,4,3,1]//[7,1,5,3,6,4]
let res = maxProfit(data)
console.log(res)
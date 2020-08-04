/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let length = gas.length
    for(let i=0;i<length;i++){
        let gasTotal = 0
        for(let j=0;j<length;j++){
            let index = (i+j)%length
            gasTotal += gas[index]
            
            if(gasTotal-cost[index] >= 0){
                gasTotal = gasTotal-cost[index]
                if(j=== (length-1)){
                    return i
                }
            }else{
                //console.log('iiii',i,index)
                if(index>i)
                    i = index
                break
            }
        }
    }
    return -1
};
let gas  = [1,2,3,4,5]
let cost = [3,4,5,1,2]
//let gas  = [2,3,4]
//let cost = [3,4,3]
//let gas = [5,1,2,3,4]
//let cost = [4,4,1,5,1]

let res = canCompleteCircuit(gas,cost)
console.log(res)
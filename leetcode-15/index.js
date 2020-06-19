/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let numSort = nums.sort((a,b)=>a-b)
    let res = []
    for(let i=0;i<numSort.length-2;i++){
        if(i>0 && numSort[i] === numSort[i-1])
            continue
        let start = i+1
        let end = numSort.length-1
        while(start<end){
            let sum = numSort[i] + numSort[start] + numSort[end]
            if(sum === 0){
                res.push([numSort[i], numSort[start], numSort[end]])
                start++
                end--
                while(start < end && numSort[start] === numSort[start-1]){   //去重复
                    start++
                }
                while(start< end && numSort[end] === numSort[end+1]){ //去重复
                    end--
                }
            }else if(sum <0){
                start++
            }else if(sum >0){
                end--
            }
        }
    }
    return res
};

let input = [-4, -1, -1,-1,-1, 0,0,0,0, 1, 2,2 ]
//let input = [0,0,0,0,0,0,0,0,0,0,0,0]
console.log(threeSum(input))
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//[2,3,1,1,4]
var canJump = function(nums) {
    let length = nums.length;
    let memo = Array(length).fill(0)
    memo[length-1] = 1
    for( let i= length-2;i>=0;i--){
        let maxStep  = Math.min(length-1, i+nums[i])
        for(let j = i+1; j<= maxStep; j++){
            if(memo[j] === 1){
                memo[i] = 1
                break
            }
        }
    }
    if(memo[0] === 1)
        return true
    else
        return false
};
//let data = [2,3,1,1,4]
let data = [3,2,1,0,4]

let res = canJump(data)
console.log(res)
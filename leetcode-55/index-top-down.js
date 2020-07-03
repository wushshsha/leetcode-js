/**
 * @param {number[]} nums
 * @return {boolean}
 */
//[2,3,1,1,4]
var canJump = function(nums) {
    let length = nums.length;
    let memo = Array(length).fill(0)
    memo[length-1] = 1
    function jump(position){
        if(memo[position] === 1)
            return true
        else if(memo[position] === -1)
            return false
        let maxStep = Math.min(length-1, position+ nums[position])
        for( let i=position+1; i<= maxStep; i++){
            let res = jump(i)
            if(res === true){
                memo[position] = 1
                return true
            }
        } 
        memo[position] = -1
        return false
    }
    let res =  jump(0)
    return res
};
//let data = [2,3,1,1,4]
let data = [3,2,1,0,4]

let res = canJump(data)
console.log(res)
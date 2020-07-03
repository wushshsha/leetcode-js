/**
 * @param {number[]} nums
 * @return {boolean}
 */
//[2,3,1,1,4]
var canJump = function(nums) {
    let length = nums.length;
   
    let target = length-1
    for(let i = length-2;i>=0;i--){
        console.log(target)
        if(i+ nums[i]>=target)
            target = i
    }
    if(target === 0)
        return true
    else
        return false
};
//let data = [2,3,1,1,4]
let data = [3,2,1,0,4]

let res = canJump(data)
console.log(res)
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0)
        return 0
    if(nums.length === 1)
        return nums[0]
    if(nums.length === 2)
        return Math.max(nums[0],nums[1])
    let prev2 = nums[0]
    let prev1 = Math.max(nums[0], nums[1])

    for(let i=2;i<nums.length; i++){
        let temp = Math.max(nums[i]+ prev2, prev1)
        prev2 = prev1
        prev1 = temp
    }
    return Math.max(prev1, prev2)
};
let data = [2,7,7,3,1]
let res = rob(data)
console.log(res)
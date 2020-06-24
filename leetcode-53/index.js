/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length <1)
        return false
    let max = nums[0]
    let sum = nums[0]
    for(let i=1;i<nums.length;i++){
        if(sum <0){
            sum = nums[i]
        }else{
            sum += nums[i]
        }
        max = max>=sum ?max : sum
    }
    return max
};
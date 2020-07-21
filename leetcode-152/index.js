/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = []
    let minProduct = []

    maxProduct[0] = nums[0]
    minProduct[0] = nums[0]
    let max = nums[0]

    for(let i=1;i<nums.length;i++){
        maxProduct[i] = Math.max(nums[i], nums[i]*maxProduct[i-1], nums[i]*minProduct[i-1])
        minProduct[i] = Math.min(nums[i], nums[i]*maxProduct[i-1], nums[i]*minProduct[i-1])
        max = Math.max(max, maxProduct[i])
    }
    return max
};
let data = [2,3,-2,4]
let res = maxProduct(data)
console.log(res)
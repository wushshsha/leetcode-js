/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = Array(nums.length).fill(1)
    let product = 1
    for(let i=0;i<nums.length;i++){
        res[i] = res[i]*product
        product = product* nums[i]
    }

    product = 1
    for(let i = nums.length-1;i>=0;i--){
        res[i] = res[i]*product
        product  = product*nums[i]
    }
    return res
};

let data = [1,2,3,4]
let res = productExceptSelf(data)
console.log(res)
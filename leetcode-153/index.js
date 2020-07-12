/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let length = nums.length
    if(length <= 1){
        return nums[0]
    }
    if(length == 2)
        return nums[0] >= nums[1] ? nums[1]:nums[0]
    
    for(let i=1;i<=length-1;i++){
        if(nums[i-1] >= nums[i] && (nums[i]<= nums[i+1] || nums[i+1] === undefined)){
            return nums[i]
        }
    }
    return nums[0]
};
let data = [4,5,6,7,0,1,2]
let res = findMin(data)
console.log(res)
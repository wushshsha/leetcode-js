/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let length = nums.length
    if(length <= 1){
        return nums[0]
    }
    if(nums[0] < nums[length-1])
        return nums[0]
    
    let left = 0, right = length-1

    while(left < right){
        let mid = Math.floor(left + (right-left)/2)
        if(nums[mid-1]> nums[mid])
            return nums[mid]
        if(nums[mid] > nums[mid+1])
            return nums[mid+1]
        
        if(nums[mid]> nums[left])
            left = mid+1
        else
            right = mid-1
    }
};

let data = [4,5,6,7,0,1,2]
let res = findMin(data)
console.log(res)
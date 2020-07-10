/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    const check = function(start, end){
        console.log('---',nums,target,start,end)
        if(end-start >1){
            let temp = Math.floor((start+end)/2)
            if(nums[temp] > target){
                return check(start, temp)
            }else if(nums[temp] < target){
                return check(temp, end)
            }else{
                return temp
            }
        }else{
            if(nums[start] === target) return start
            if(nums[end] === target) return end
            return -1
        }
    }
    return check(0,nums.length)
};
let data = [-1,0,3,5,9,12]
let res = search(data,3)
console.log(res)
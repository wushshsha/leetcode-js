/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let memo = new Map()
    let min = 0
    let equal = false
    for(let i=0;i<nums.length;i++){
        if(memo.has(nums[i])){
            let data =  memo.get(nums[i])
            if(data.length === 1){
                data[1] = i-data[0]
                data[0] = i
            }else{
                if(i-data[0] <= data[1]){
                    data[1] = i-data[0]
                    data[0] = i
                }
            }
            equal = true
            if(min === 0)
                min = data[1]
            else{
                min = Math.min(min, data[1])
            }
            memo.set(nums[i],data)
        }else{
            memo.set(nums[i],[i])
        }
    }
    if(equal === true && min <= k && min>0){
        return true
    }else{
        return false
    }
};
let nums = [1,0,1,1], k = 1
let res = containsNearbyDuplicate(nums,k)
console.log(res)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var arr = [2, 7, 11, 15]
var target = 17

var twoSum = function(nums, target) {
    var  map = new Map()
    map.set(nums[0],0);
    for(let i=1;i<nums.length; i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]), i]
        }
        map.set(nums[i],i);
    }
    return [];
};

console.log(twoSum(arr,target));
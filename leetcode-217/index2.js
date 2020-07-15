/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()
    for (const num of nums) {
        if(set.has(num)){
            return true
        }else{
            set.add(num)
        }
    }
    return false
};
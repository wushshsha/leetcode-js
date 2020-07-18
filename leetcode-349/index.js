/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let memo1 = new Set(nums1)
    let memo2 = new Set(nums2)
    console.log(memo1, memo2)
    let res = []
    for(let item of memo2){
        console.log('--',item)
        if(memo1.has(item)){
            res.push(item)
        }
    }
    return res
};

let nums1 = [1,2,2,1], nums2 = [2,2]
let res = intersection(nums1,nums2)
console.log(res)
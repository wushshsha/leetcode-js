var containsDuplicate = function(nums) {
    if(nums.length <=1)
        return false
    let newNums = nums.sort((a,b)=>a-b)
    for(let i=1;i<newNums.length;i++){
        if(newNums[i]-newNums[i-1] === 0)
            return true
    }
    return false
};
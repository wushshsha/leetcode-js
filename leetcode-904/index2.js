/**
 * @param {number[]} tree
 * @return {number}
 */
//思路，滑动窗口方法
//
var totalFruit = function(tree) {
    if(tree.length<=2)
        return tree.length
    
    let j=0
    let map = new Map()
    let max = 0
    for(let k=0;k<tree.length;k++){
        map.set(tree[k],k)
        if(map.size>2){
            let minIndex = tree.length-1
            for(const [fruit, index] of map){
                if(index < minIndex){
                    minIndex = index
                }
            }
            map.delete(tree[minIndex])
            j = minIndex+1
        }
        max = Math.max(max, k-j+1)
    }
    return max
};
let data = [3,3,3,1,2,1,1,2,3,3,4]//[1,1,6,5,6,6,1,1,1,1]
let res = totalFruit(data)
console.log(res)
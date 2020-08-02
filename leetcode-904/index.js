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
    let firstKey = tree[0]
    let secondKey = undefined
    for(let k=0;k<tree.length;k++){
        if(map.size === 0){
            firstKey = tree[0]
            max = Math.max(max, k-j+1)
        }else if(map.size === 1){
            if(!map.has(tree[k])){
                secondKey = tree[k]
            }
            max = Math.max(max, k-j+1)
        }else if(map.size === 2){
            if(map.has(tree[k])){
                max = Math.max(max, k-j+1)
            }else{
                console.log('---',firstKey, secondKey,k)
                max = Math.max(max, k-j)
                let min = Math.min(map.get(firstKey),map.get(secondKey))
                if(map.get(firstKey) < map.get(secondKey)){
                    j = map.get(firstKey)+1
                    map.delete(firstKey)
                    firstKey = secondKey
                    secondKey = tree[k]
                }else{
                    j = map.get(secondKey)+1
                    map.delete(secondKey)
                    secondKey = tree[k]
                }
            }
        }
        map.set(tree[k],k)
    }
    return max
};
let data = [3,3,3,1,2,1,1,2,3,3,4]//[1,1,6,5,6,6,1,1,1,1]
let res = totalFruit(data)
console.log(res)
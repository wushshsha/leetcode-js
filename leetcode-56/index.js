/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/**
 * 
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]

 */
var merge = function(intervals) {
    if(intervals.length <2){
        return intervals
    }
    let input = intervals.sort((a,b)=> a[0]-b[0])
    console.log('---input',input)
    let cur = input[0]
    let res = []
    
    for (let i=1;i<= input.length-1; i++){
        if(input[i][0]<= cur[1]){
            cur[1] = Math.max(cur[1], input[i][1])
        }else{
            res.push([...cur])
            cur = input[i]            
        }
    }
    res.push(cur)
    return res
};
const data = [[1,9],[2,6],[8,16],[15,18]]
let res = merge(data)
console.log(res)

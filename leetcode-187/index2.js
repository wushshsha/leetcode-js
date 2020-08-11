/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let memo = new Map()
    let resSet = new Set()
    if(s.length<=10)
        return []
    for(let i=0;i<= s.length-10;i++){
        let str = s.slice(i,i+10)
        if(memo.has(str)){
            resSet.add(str)
        }else {
            memo.set(str,true)
        }
    }
    let res = Array.from(resSet)
    return res
};
//let data = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
let data ="AAAAAAAAAAAA"
let res = findRepeatedDnaSequences(data)
console.log(res)
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let memo = new Map()
    let resMap = new Map()
    if(s.length<=10)
        return []
    for(let i=0;i<= s.length-10;i++){
        let str = s.slice(i,i+10)
        if(memo.has(str)){
            if(!resMap.has(str)){
                resMap.set(str,true)
            }
        }else {
            memo.set(str,true)
        }
    }
    let res = []
    resMap.forEach((val,key)=>{
        res.push(key)
    })
    return res
};
//let data = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
let data ="AAAAAAAAAAAA"
let res = findRepeatedDnaSequences(data)
console.log(res)
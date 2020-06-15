/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let a = []
    let input = s.split('')
    let max = 0
    input.forEach((val,index)=>{
        let findIndex = a.indexOf(val)
        if(findIndex >-1){
            a.splice(0,findIndex+1)
        }
        a.push(val)
        if(a.length > max){
            max = a.length
        }
    })
    return max
};

let s = "pwwkew"
let res = lengthOfLongestSubstring(s)
console.log(res)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length)
        return false

    let memo = Array(26).fill(0)
    for(let i of s){
        memo[i.charCodeAt()-97]  +=1
    }
    for(let i of t){
        memo[i.charCodeAt()-97]  -=1
    }
    for(let i of memo){
        if(i !== 0)
            return false
    }

    return true
};
s = "anagram", t = "nagaraa"
let res = isAnagram(s,t)
console.log(res)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length<2)
        return s.length

    let first = 0
    let max = 0
    let map = new Map()
    map.set(s.charAt(first),first)
    for(let i=1;i<s.length;i++){
        if(map.has(s.charAt(i))){
            max = Math.max(max, i - first)
            let temp = map.get(s.charAt(i))+1 
            if(first< temp)
                first = temp
            map.delete(s.charAt(i))
            map.set(s.charAt(i),i)
        }else{
            map.set(s.charAt(i),i)
        }
    }
    max = Math.max(max, s.length-first)
    return max
};
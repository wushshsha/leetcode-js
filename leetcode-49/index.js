/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = new Map()
    for(const str of strs){
        let characters = Array(26).fill(0)
        for(let i=0; i< str.length;i++){
            const ascii = str.charCodeAt(i)-97
            characters[ascii]++ 
        }
        key = characters.join("")
        if(map.has(key)){
            map.set(key, [...map.get(key), str])
        }else{
            map.set(key, [str])
        }
    }
    let res = []
    for(const val of map){
        res.push(val[1])
    }
    return res
};
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let length = chars.length
    if(length <2){
        return chars.split('')
    }
    let cur = chars[0]
    let res = cur
    let curCount = 1
    function numLength(count){
        let res = 0
        if(curCount>1){
            if(curCount>=1000)
                res +=4
            else if(curCount>=100){
                res +=3
            }else if(curCount>=10){
                res +=2
            }else{
                res +=1
            }
        }else
            res = 0
        return res
    }
    for(let i=1;i<length;i++){
        if(cur === chars[i]){
            curCount++
        }else{
            cur = chars[i]
            //res += numLength(curCount)
            if(curCount>1)
                res += curCount.toString()
            res += cur
            curCount=1
        }
    }
    if(curCount>1)
        res += curCount.toString()
    console.log(res.split(''))
    return res.length
};

let data = ["a","a","b","b","c","c","c"]
let res = compress(data)
console.log(res)
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2)
        return n
    let map = new Map()
    map.set(1,1)
    map.set(2,2)
    const fun = function(n){
        if(n>2){
            if(map.has(n))
                return map.get(n)
            else{
                let resN = fun(n-1)+fun(n-2)
                map.set(n,resN)
                return resN
            }
        }
        else 
            return n
    }
    return fun(n)
};
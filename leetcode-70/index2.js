/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2)
        return n
    let map = new Map()
    let res1 = 1
    let res2 = 2
    for(let i=3;i<=n;i++){
        let temp = res2 + res1
        res1 = res2
        res2 = temp
    }
    return res2
};

let data = 3
let res = climbStairs(data)
console.log(res)
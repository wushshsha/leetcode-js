/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m=== 0 || n === 0){
        return 0
    }
    if(m=== 1 || n === 1){
        return 1
    }
    let row = new Array(n).fill(0)
    let memo = new Array(m).fill(row)
    for(let i=0;i<m;i++){
        //memo.push([])
        for(let j=0;j<n;j++){
            if(j===0 || i===0)
                memo[i][j]=1
            else{
                memo[i][j] = memo[i][j-1] + memo[i-1][j]
            }
        }
    }
    
    return memo[m-1][n-1]
};
let m=7,n=3
let data = uniquePaths(m,n)
console.log(data)
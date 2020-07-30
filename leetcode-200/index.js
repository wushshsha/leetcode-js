/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0
    function dfs(row, col){
        if(row<0 || col <0 || row>= grid.length || col >= grid[0].length || grid[row][col]=== '0')
            return
        grid[row][col] = '0'
        dfs(row-1, col)
        dfs(row+1, col)
        dfs(row, col-1)
        dfs(row, col+1)
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === '1'){
                res++
                dfs(i,j)
            }
        }
    }
    return res 
};
let data = [
    ["1","1","1"],
    ["0","1","0"],
    ["1","1","1"]
]
let res = numIslands(data)
console.log(res)
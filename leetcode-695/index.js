/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let island = []
    for(let row=0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
            if(grid[row][col] === 1){
                if(row === 0 ){
                    if(col>0){
                        if(grid[row][col-1] !== 1)
                            island.push([row,col])
                    }else{
                        island.push([row,col])
                    }
                }else if(col === 0){
                    if(row >0){
                        if(grid[row-1][col] === 0){
                            island.push([row, col])
                        }
                    }else
                        island.push([row,col])
                }else{
                    if(grid[row-1][col] !== 1 && grid[row][col-1] !== 1){
                        island.push([row, col])
                    }
                }
            }
        }
    }

    let count = 0
    function dfs(row, col){
        if(row >=0 && col >=0 && row<grid.length && col< grid[0].length && grid[row][col] ===1){
            grid[row][col] = 0
            count++
            console.log(row,col)
            dfs(row+1,col)
            dfs(row, col+1)
            dfs(row-1, col)
            dfs(row, col-1)
        }
    }
    let max = 0

    for(let i=0;i<island.length;i++){
        count =0
        dfs(island[i][0], island[i][1],0)
        max = Math.max(max, count)
    }
    return max
};
let data = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,1,1,0,1,0,0,0,0,0,0,0,0],
[0,1,0,0,1,1,0,0,1,0,1,0,0],
[0,1,0,0,1,1,0,0,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0]]
data = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]

let res = maxAreaOfIsland(data)
console.log(res)
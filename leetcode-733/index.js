/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let color = image[sr][sc]
    if(image[sr][sc]=== newColor)  
        return

    function dfs(r,c){
        if(r<0 || r>= image.length || c <0 || c>= image[0].length || image[r][c] !== color)
            return
        image[r][c] = newColor
        dfs(r-1,c)
        dfs(r+1,c)
        dfs(r,c-1)
        dfs(r,c+1)
    }
    dfs(sr,sc)
    return image
};
let data = [
    [1,1,1],
    [1,1,0],
    [1,0,1]
]
let res = floodFill(data,1,1,2)
console.log(res)
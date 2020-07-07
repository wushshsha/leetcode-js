/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let colZero = false
    let rowZero = false
    for(let i of matrix[0]){
        if(i === 0){
            rowZero = true
            break
        }
    }
    for(let i of matrix){
        if(i[0] === 0){
            colZero = true
            break
        }
    }
    for(let i =1;i<matrix.length; i++){
        for(let j=1;j<matrix[0].length; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }
    for(let i=1;i<matrix.length;i++){
        for(let j=1;j<matrix[0].length;j++){
            if(matrix[i][0]=== 0 || matrix[0][j] === 0){
                matrix[i][j] = 0
            }
        }
    }
    if(rowZero){
        for(let i=0;i<matrix[0].length;i++){
            matrix[0][i] = 0
        }
    }
    if(colZero){
        for(let j=0;j<matrix.length;j++){
            matrix[j][0] = 0
        }
    }

    return matrix
};



let data = [
    [0,1,2,0],
    [3,4,0,2],
    [1,3,1,5]
  ]

let res = setZeroes(data)
console.log(res)
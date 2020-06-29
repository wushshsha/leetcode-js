/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length ==0)
        return []
    
    let left = 0
    let right = matrix[0].length-1
    let top = 0
    let bottom = matrix.length-1
    let res = []
    let direction = 'right'
    let row = 0
    let col = 0
    while(left <=right && top<=bottom){
        res.push(matrix[col][row])
        
        if(direction === 'right'){
            if(row< right){
                row++
            }else if(row === right){
                top++
                col++
                direction ='down'
            }
        }else if(direction === 'down'){
            if(col<bottom){
                col++
            }else if(col === bottom){
                right--
                row--
                direction = 'left'
            }
        }else if(direction === 'left'){
            if(row>left){
                row--
            }else if(row === left){
                bottom--
                col--
                direction = 'up'
            }
        }else if(direction === 'up'){
            if(col>top){
                col--
            }else if(col === top){
                left++
                row++
                direction = 'right'
            }
        }
    }
    return res
};

let data = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let res = spiralOrder(data)
console.log(res)
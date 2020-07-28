var countBattleships = function(board) {
    let res = 0
    for(let row = 0;row < board.length; row++){
        for(let col=0;col< board[0].length;col++){

            if(row>0){
                if(board[row-1][col]=== 'X'){
                    continue
                }
            }
            if(col>0){
                if(board[row][col-1] === 'X')
                    continue
            }
            if(board[row][col] === 'X')
                res++
        }
    }

    return res
};
let data = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
let res = countBattleships(data)
console.log(res)
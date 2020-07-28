/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let res = 0
    for(let row = 0;row < board.length; row++){
        for(let col=0;col< board[0].length;col++){
            if(board[row][col] === 'X'){
                res++
                dsf(row, col)
            }
        }
    }

    function dsf(row, col){
        if(row<0 || col<0 || row>= board.length || col >= board[0].length || board[row][col] !== 'X'){
            return
        }
        board[row][col] = '.'
        dsf(row+1, col)
        dsf(row-1, col)
        dsf(row, col-1)
        dsf(row, col+1)
    }
    return res
};
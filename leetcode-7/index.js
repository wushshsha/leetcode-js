/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev =0
    const INT_MAX = Math.pow(2,31)-1
    const INT_MIN = 0-Math.pow(2,31)
    while(x != 0){
        let pop = x %10
        x = parseInt(x/10)
        if (rev > INT_MAX/10 || (rev == INT_MAX / 10 && pop > 7)) return 0;
        if (rev < INT_MIN/10 || (rev == INT_MIN / 10 && pop < -8)) return 0;
        rev = rev*10 + pop
    }
    return rev
};
/**
 * 这道题的主要思路是以此从个位数取出数值，然后将之前的结果X10 在加现在的值，其中需要注意越界的问题
 * */
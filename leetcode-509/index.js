/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    const fun = function(N){
        if(N===0){
            return 0
        }else if(N===1){
            return 1
        }else{
            return fun(N-1)+ fun(N-2)
        }
    }
    if(N === 0)
        return 0
    else if(N===1)
        return 1
    else
        return fun(N)
};
let data = 5
let res = fib(data)
console.log(res)
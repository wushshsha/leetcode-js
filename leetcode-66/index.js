/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let prev = 1
    for(let i=digits.length-1;i>=0;i--){
        if(prev === 1){
            if(digits[i]===9){
                prev = 1
                digits[i]=0
            }else{
                prev = 0
                digits[i] +=1
            }
        }
    }
    if(prev === 1){
        digits.splice(0,0,1)
    }
    return digits
};
let data = [9,9,9]
let res = plusOne(data)
console.log(res)
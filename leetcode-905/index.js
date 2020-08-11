/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    
    let oArr = []
    let len = A.length
    for(let i=len-1;i>=0;i--){
        console.log('-----',A[i])
        if(A[i]%2 === 0){
            oArr.push(A[i])
            A.splice(i,1)
        }
    }
    return [...oArr, ...A]
};
let data = [0,1]
const res = sortArrayByParity(data)
console.log(res)
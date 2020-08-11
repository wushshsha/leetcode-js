/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    
    let oArr = []
    let len = A.length
    let i=0,j=A.length-1
    while(i<j){
        if(A[i]%2 === 1 && A[j]%2 === 0){
            [A[i],A[j]] = [A[j],A[i]]
            i++
            j--
        }
        if(A[i]%2 === 0){
            i++
        }
        if(A[j]%2 === 1){
            j--
        }
    }
    return A
};
let data = [0,1]
const res = sortArrayByParity(data)
console.log(res)
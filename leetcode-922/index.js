/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let i=0,j=1
    for(i=0;i<A.length;i=i+2){
        if(A[i]%2 === 1){
            while(j<A.length){
                if(A[j]%2 === 0){
                    [A[i],A[j]] = [A[j],A[i]]
                    j = j+2
                    break
                }else{
                    j = j+2
                }
            }
        }
    }
    return A
};
let data = [2,3,1,1,4,0,0,4,3,3]
let res = sortArrayByParityII(data)
console.log(res)
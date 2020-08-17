/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    if(rec1[0]>= rec2[2] || rec1[1]>=rec2[3] || rec1[2] <= rec2[0] || rec1[3] <= rec2[1]){
        return false
    }else 
        return true
};
//const rec1 = [0,0,2,2], rec2 = [1,1,3,3]
//const rec1 = [0,0,1,1], rec2 = [1,0,2,1]
const rec1 = [5,15,8,18], rec2 =[0,3,7,9]

const res = isRectangleOverlap(rec1, rec2)
console.log(res)
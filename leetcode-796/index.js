/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if(A.length !== B.length) return false

    const str = A+A
    return str.includes(B)
};

const A = 'abcde', B = 'cdeab'
let res = rotateString(A,B)
console.log(res)
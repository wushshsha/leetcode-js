/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let i=S.length-1, j=T.length-1, spaceI = 0,spaceJ=0
    while(i>=0 || j>=0){
        while(i>=0){
            if(S.charAt(i)=== '#'){
                spaceI++
                i--
            }else if(spaceI >0){
                i--
                spaceI--
            }else{
                break
            }
        }
        while(j>=0){
            if(T.charAt(j)=== '#'){
                spaceJ++
                j--
            }else if(spaceJ >0){
                j--
                spaceJ--
            }else{
                break
            }
        }
        if(S.charAt(i) !== T.charAt(j)){
            return false
        }
        if((i>=0 && j<0) || (i<0 && j>=0)){
            return false
        }
        i--
        j--
    }
    return true
};
//const S = "ab#c", T = "ad#c"
//const S = "ab##", T = "c#d#"
const S = "a#c", T = "b"
console.log(backspaceCompare(S,T))

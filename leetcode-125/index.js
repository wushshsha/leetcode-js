/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length<2)
        return true

    const str = s.toLowerCase().replace(/[\W_]/g,'')
    let i=0,j=str.length-1;
    while(i<j){
        if(str.charAt(i) != str.charAt(j))
            return false
        i++;
        j--;
    }
    return true
};

let res = isPalindrome("race a car")
console.log(res)
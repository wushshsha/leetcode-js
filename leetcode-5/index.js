/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <2)
        return s
    let maxLength = 1
    let start = 0

    const help = (left, right)=>{
        while(left >= 0 && right < s.length && s[left] === s[right]){
            let len = right - left + 1
            if(len > maxLength){
                maxLength = len
                start = left
                console.log(start,maxLength)
            }
            left--
            right++
        }
    }
    for(let i=0;i<s.length;i++){
        help(i-1,i+1)
        help(i,i+1)
    }
    return s.substr(start, maxLength)
};

let res = longestPalindrome("babad")
console.log(res)
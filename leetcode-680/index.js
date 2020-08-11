/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    isPalindrome = function(left,right){
        while(left<right){
            if(s.charAt(left) === s.charAt(right)){
                left++
                right--
            }else{
                return false
            }
        }
        return true
    }
    let left =0,right = s.length-1
    while(left<right){
        if(s.charAt(left) !== s.charAt(right)){
            return isPalindrome(left+1,right) || isPalindrome(left, right-1)
        }
        left++
        right--
    }
    return true
};
let data = "gmlcuppuculmg"
let res = validPalindrome(data)
console.log(res)
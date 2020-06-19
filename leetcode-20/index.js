/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let kouhao = new Map()
    kouhao.set("(",")")
    kouhao.set("[","]")
    kouhao.set("{","}")
    let stack = []
    for(let i =0;i<s.length;i++){
        if(kouhao.has(s[i]))
            stack.push(kouhao.get(s[i]))
        else{
            if(stack.pop() !== s[i])
                return false
        }
            
    }
    if(stack.length !== 0)
        return false

    return true

};

let str = "{[]}"
let res = isValid(str)
console.log(res)
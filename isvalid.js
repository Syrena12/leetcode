/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const dict={
        "(":")",
        '{':'}',
        '[':']',
        ")":")",
        '}':'}',
        ']':']'
    };
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(stack[stack.length-1]==dict[s[i]]){
            stack.pop();
        }else{
            stack.push(dict[s[i]]);
        }
    }
    return stack.length===0
};

isValid("()[]{}");
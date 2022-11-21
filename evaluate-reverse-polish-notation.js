/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var dic=['+','-','*','/'];
    var stack = [];
    for(const x of tokens){
        if(stack.length>1 && dic.includes(x)){
            let tmp = '('+stack.pop()+x+stack.pop()+')';
            stack.push(tmp);
        }else{
            stack.push(x);
        }
    }
    console.log(parseInt(stack.pop()));
};

evalRPN(["2","1","+","3","*"]);
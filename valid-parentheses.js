var isValid = function(s) {
    var dic = {'(':')','[':']','{':'}'};
    var stack = [];
    for(const x of s){
        if(x in dic){
            stack.push(x);
            continue;
        };
        if(dic[stack.pop()]!==x){
            return false;
        };
    }
    return !stack.length;
};

isValid("()");
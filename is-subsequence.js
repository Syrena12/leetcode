var isSubsequence = function(s, t) {
    let node1=0,node2=0;
    while(node1<s.length && node2<t.length){
        if(s[node1]===t[node2]){
            node1++;
        }
        node2++;
    };
    if(node1===s.length) return true;
    else return false;


};

isSubsequence("abc","ahbgdc")
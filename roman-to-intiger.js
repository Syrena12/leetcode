var romanToInt = function(s) {
    let res = 0;
    const dict={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    for(let i=0;i<s.length;i++){
        res+=dict[s[i]];
    }
    console.log(res);
    return res;
};

romanToInt("MCMXCIV");
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let res = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let index = 0;
    for(let i=0;i<s.length;i++){
        if(index<g.length&&g[index]<=s[i]){
            res++;
            index++;
        }
    }
    return res;
};

findContentChildren([10,9,8,7],[5,6,7,8])
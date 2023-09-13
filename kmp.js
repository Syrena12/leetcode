/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length ===0) return 0;
    const getnext = (needle) =>{
        let j = 0;
        let next = [];
        next.push(j);
        for(i=1;i<needle.length;++i){
            while(j>0&&needle[i]!==needle[j]){
                j = next[j-1];
            }
            if(needle[i]===needle[j]){
                j++;
            }
            next.push(j);
        }
        return next;
    }
    let next = getnext(needle);
    let j = 0;
    for (let i = 0; i < haystack.length; ++i) {
        while (j > 0 && haystack[i] !== needle[j])
            j = next[j - 1];
        if (haystack[i] === needle[j])
            j++;
        if (j === needle.length)
            return (i - needle.length + 1);
    }
    return -1


};

strStr("sadbutsad","sad")
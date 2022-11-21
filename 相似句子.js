/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    let s1=sentence1.split(' '),s2 = sentence2.split(' ');
    console.log(s1.length,s2.length);
    if(s1===1&&s1[0]===s2[0]||s1[0]===s2[s2.length-1]) return true
    if(s2===1&&s1[0]===s2[0]||s2[0]===s1[s1.length-1]) return true
    if(s1.length>s2.length){
        for(let i=0;i<s2.length;i++){
            if(s1[i]===s2[i]) continue;
            else if(s2[i]===s1[s1.length-s2.length+i]) continue;
            else return false;
        }
    }
    if(s1.length<s2.length){
        for(let i=0;i<s1.length;i++){
            if(s1[i]===s2[i]) continue;
            else if(s1[i]===s2[s2.length-s1.length+i]) continue;
            else return false;
        }
    }
    if(s1.length===s2.length){
        for(let i=0;i<s1.length;i++){
            if(s1[i]===s2[i]) continue;
            else return false;
        }
    }
    return true
};

areSentencesSimilar("Y ggUFOmtf woKuTtO W uwJZ Zan wgm zprl Kgn mAY xLlCH phA UIVKIohfw al g m",
"Jfa jfvmGU bKSSX uQ AmTzbBW EF jdc ft Z g VcM oNlI jeX q mNG YnUgGSnejt Y");
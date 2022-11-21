/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    if(password.length<8) return false
    let spe = "!@#$%^&*()-+";
    let lower = 0, bigger =0, num=0, special =0;
    for(let i=0;i<password.length;i++){
        let strcode = password[i].charCodeAt()
        if(strcode>=65&&strcode<=90){
            bigger++;
        };
        if(strcode>=97&&strcode<=122){
            lower++;
        };
        if(parseInt(password[i])>=0&&parseInt(password[i])<=9){
            num++;
        };
        if(spe.indexOf(password[i])>=0){
            special++;
        };
        if(i<password.length&&password[i]===password[i+1]){
            return false;
        }
    }
    if(lower&&bigger&&num&&special) return true
};

strongPasswordCheckerII("ecuwcfoyajkolntovfniplayrxhzpmhrkhzonopcwxgupzhoupw");
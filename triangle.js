function triangle(n) {
    for(let i=0;i<n;i++){
        let str = '';
        for(j=0;j<i;j++){
            str += ' '
        }
        for(let k = 1; k<(n-i)*2 ; k++){
            str += '*'
        }
        console.log(str);
    }
}

triangle(5);
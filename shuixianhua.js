var m,n,x;
while(x = read_line()){
    var arr = x.split(' ');
    m = parseInt(arr[0]);
    n = parseInt(arr[1]);
    if(100<=m&&m<=n&&n<=999){
        var res = [];
        var j = 0;
        // for(var i = m;i<=n;i++){
        //   var bai = patseInt(i/100);
        //   var shi = parseInt((i-bai*100)/10);
        //   var ge = i-bai*100-shi*10;
        //   if(i==ge*ge*ge + shi*shi*shi + bai*bai*bai){
        //     j=j+1;
        //     if(j>1){
        //       res.push(" "+i);
        //     }else{
        //       res.push(i)
        //     }
        //   }
        // }
        for(var i=m;i<=n;i++)
        {
            var ge,shi,bai;
            bai=parseInt(i/100);
            shi=parseInt((i-bai*100)/10);
            ge=i-bai*100-shi*10;
            if(i==ge*ge*ge + shi*shi*shi + bai*bai*bai)
            {
                j=j+1;
                if(j>1){
                    out.push(" "+i);
                }
                else{
                    out.push(i);
                }
            }
        }
        if(j==0){
            res.push("no");
        }
        print(res.join(''));
    }
}

// var sc;
// while(sc = read_line()){
//     var arr = sc.split(' ');
//     n=parseInt(arr[1]);
//     m=parseInt(arr[0]);
//     if(100<=m&&m<=n&&n<=999){
//         var out = [];
//         var j=0;
//         for(var i=m;i<=n;i++)
//         {
//             var ge,shi,bai;
//             bai=parseInt(i/100);
//             shi=parseInt((i-bai*100)/10);
//             ge=i-bai*100-shi*10;
//             if(i==ge*ge*ge + shi*shi*shi + bai*bai*bai)
//             {
//                 j=j+1;
//                 if(j>1){
//                     out.push(" "+i);
//                 }
//                 else{
//                     out.push(i);
//                 }
//             }
//         }
//         if(j==0){
//             out.push("no");
//         }
//         print(out.join(''));
//     }
// }
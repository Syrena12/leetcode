var checkXMatrix = function(grid) {
    const n = grid.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i===j||i===n-1-j){
                if(grid[i][j]===0) return false
            }else{
                if(grid[i][j]!==0) return false
            }
        }
    }
    return true
};
checkXMatrix([[5,0,0,1],[0,4,1,5],[0,5,2,0],[4,1,0,2]]);
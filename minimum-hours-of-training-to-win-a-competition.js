var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let energysum = energy.reduce((cur,next)=>(cur+next),0);
    let energyNeed = Math.max(0, energysum-initialEnergy+1);
    // const s = energy.reduce((a, b) => a + b, 0);
    // let ans = Math.max(0, s - initialEnergy + 1);
    console.log(energyNeed);
    let curExperience = initialExperience;
    let experienceNeed = 0;
    for(let i = 0;i<experience.length;i++){
        if(curExperience <= experience[i]){
            experienceNeed += experience[i] - curExperience+1;
            curExperience = experience[i]+1;
        }
        curExperience += experience[i];
        console.log(experienceNeed);
    }
    // for (const x of experience) {
    //     if (initialExperience <= x) {
    //         ans += x - initialExperience + 1;
    //         initialExperience = x + 1;
    //     }
    //     initialExperience += x;
    // }
    const res = energyNeed+experienceNeed;
    return res
};

minNumberOfHours(5,3,[1,4],[2,5])
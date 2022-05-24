function sumSeconds(input){
    let runer1 = Number(input[0]);
    let runer2 = Number(input[1]);
    let runer3 = Number(input[2]);
    let totalSum = runer1 + runer2 + runer3;
    let hour = Math.floor(totalSum / 60);
    let seconds = totalSum % 60;
    

    if (seconds < 10){
        console.log(`${hour}:0${seconds}`);
    } else {
        console.log(`${hour}:${seconds}`);
    }


}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);
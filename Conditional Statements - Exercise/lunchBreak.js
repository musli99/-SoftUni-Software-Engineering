function lunchBreak(input){
    let nameOfSeries = input[0];
    let durationOfEpisode = Number(input[1]);
    let durationOfBreak = Number(input[2]);
    let eatTime = (durationOfBreak * 12.5) / 100;
    let chillTime = durationOfBreak * 0.25;
    let sum = eatTime + chillTime;
    let timeLeft = durationOfBreak - sum;
    let diff = Math.ceil(Math.abs(durationOfEpisode - timeLeft));

    if (timeLeft >= durationOfEpisode){
        console.log(`You have enough time to watch ${nameOfSeries} and left with ${diff} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${diff} more minutes.`);
    }
    
}

lunchBreak(["Game of Thrones","60","96"]);
lunchBreak(["Teen Wolf","48","60"]);


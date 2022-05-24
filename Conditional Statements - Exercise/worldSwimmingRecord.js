function worldSwimmingRecord(input){
    let recordINSec = Number(input[0]);
    let distanceINMeter = Number(input[1]);
    let oneMForOneS = Number(input[2]);
    let bonusTome = Math.floor(distanceINMeter / 15) * 12.5
    let totalTime = (distanceINMeter * oneMForOneS) + bonusTome;
    let diff = Math.abs(recordINSec - totalTime);

    if (totalTime < recordINSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["10464","1500","20"]);
worldSwimmingRecord(["55555.67","3017","5.03"]);


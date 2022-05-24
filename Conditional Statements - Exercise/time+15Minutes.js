function timePlusFiftenMinutes(input){
    let hour = Number(input[0]);
    let minute = Number(input[1]);
    let totalTimeInSec = hour * 60 + minute +15;
    let newHour = Math.floor(totalTimeInSec / 60);
    let newMin = totalTimeInSec % 60;

    if (newMin <= 9){
        newMin = `0${newMin}`
    } else {
        newMin = newMin
    }

    if (newHour > 23){
        newHour = 0
    }else{
        newHour = newHour
    }
 
    console.log(`${newHour}:${newMin}`);

}
timePlusFiftenMinutes(["1","46"]);
timePlusFiftenMinutes(["0", "01"]);
timePlusFiftenMinutes(["11", "08"]);
timePlusFiftenMinutes(["12", "49"]);
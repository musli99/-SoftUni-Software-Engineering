function shopping(input){
    let budget = Number(input[0]);
    let v = Number(input[1]);
    let p = Number(input[2]);
    let r = Number(input[3]);
    let vPrice = v * 250;
    let pPrice = p * (vPrice * 0.35);
    let rPrice = r * (vPrice * 0.10);
    let totalPrice = vPrice  + pPrice  + rPrice;
     if (v > p){
         totalPrice = totalPrice * 0.85;
     } else {
         totalPrice = totalPrice;
     }

     let diff = Math.abs(budget-totalPrice).toFixed(2);

     if ( budget >= totalPrice ){
         console.log(`You have ${diff} leva left!`);
     } else {
         console.log(`Not enough money! You need ${diff} leva more!`);
     }
}

shopping(["900","2","1","3"]);
shopping(["920.45","3","1","1"])


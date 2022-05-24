function toyShop(input){
    let trpi = Number(input[0]);
    let countPuzzel = Number(input[1]);
    let countDoll = Number(input[2]);
    let countBear = Number(input[3]);
    let countMinion = Number(input[4]);
    let countTruck = Number(input[5]);

    let totalPrice = countPuzzel * 2.60 + countDoll * 3 + countBear * 4.10 + countMinion * 8.20 + countTruck * 2;
    let totalCount = countPuzzel + countDoll + countBear + countMinion + countTruck;

    if (totalCount >= 50){
        totalPrice = totalPrice * 0.75;
    } else {
        totalPrice = totalPrice;
    }
     let rent = totalPrice * 0.10;
     let price = totalPrice - rent;
     let diff = Math.abs(price - trpi).toFixed(2);

     if (price >= trpi){
         console.log(`Yes! ${(diff)} lv left.`);
     } else {
         console.log(`Not enough money! ${(diff)} lv needed.`);
     }

     
}


toyShop(["40.8", "20", "25", "30", "50","10"])
toyShop(["320","8","2","5","5","1"])

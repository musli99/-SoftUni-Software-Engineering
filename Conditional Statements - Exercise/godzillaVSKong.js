function godzillaVSKong(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let priceForCloutsForOneStatist = Number(input[2]);
    let decor = budget * 0.10
    let priceForClouts = statists * priceForCloutsForOneStatist

    if (statists > 150){
        priceForClouts = priceForClouts * 0.90;
    } else {
        priceForClouts = priceForClouts
    }

    let sum = priceForClouts + decor;
    let diff = Math.abs(budget - sum).toFixed(2);

    if (sum > budget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff} leva left.`);
    }
}

godzillaVSKong(["20000","120","55.5"]);
godzillaVSKong(["15437.62","186","57.99"]);


function printFarmInventory(cows, chickens){
    let cowSring = String(cows);
    while(cowSring.length<3){
        cowSring = "0" + cowSring;
    }
    console.log(`${cowSring} Cows`);
    let chickenString = String(chickens);
    while(chickenString.length<3){
        chickenString = "0" +  chickenString;
    }
    console.log(`${chickenString} chickens`);
}

printFarmInventory(7,11);

/**
 *  Chair --> 3 cft
 *  table --> 10 cft
 *  bed --> 50 cft
 */

function woodQuantityCalculatro(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood =  chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;


    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const furneture = woodQuantityCalculatro(3, 3, 2);

console.log('Wood needed', furneture);

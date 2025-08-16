// Your task is to calculate the total budget required to buy electronics:


function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopTotalPrice = laptopPrice * laptopQuantity;
    const tableTotalPrice  = tabletPrice * tabletQuantity;
    const mobileTotalPrice = mobilePrice * mobileQuantity;

    const totalMoney = laptopTotalPrice + tableTotalPrice + mobileTotalPrice ;

    return totalMoney;
    
}

const totalBuaget = calculateElectronicsBudget(3, 2, 2);

console.log(totalBuaget);

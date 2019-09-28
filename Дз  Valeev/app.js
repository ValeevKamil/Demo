const amountPurchases = 8000;
const bonusesDivision = 10;
const remainderDivision = 1000;
const bonus = (amountPurchases - 
    amountPurchases % remainderDivision) / bonusesDivision;
console.log(bonus);


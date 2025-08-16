function calculateTax(income, expense) {
    if (typeof income !== "number" || typeof expense !== "number") {
        return "Invalid Input";
    }
    if (income < 0 || expense < 0) {
        return "Invalid Input";
    }
    if (income < expense) {
        return "Invalid Input";
    }

    const profit = income - expense;

    const tax = profit * .20;

    return tax;
}


const taxReturn = calculateTax(400, -400);
console.log(taxReturn);

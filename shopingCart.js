const products = [
    { name: 'Chiruni', price: 100, quantity: 3 },
    { name: 'shampo', price: 300, quantity: 2 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'Pant', price: 1200, quantity: 1 },

]



function cartTotal (products){
    let total = 0;
    for(const product of products){
        let thisProductCost = product.price * product.quantity;
       total = total + thisProductCost;
        
    }
    return total;
}


const shopingCost = cartTotal(products);
console.log(shopingCost);

const numbers = [300, 100, 700, 1200];



const products = [
    { name: 'shampo', price: 300 },
    { name: 'Chiruni', price: 100 },
    { name: 'shirt', price: 700 },
    { name: 'Pant', price: 1200 },

]

function gerShopingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
        
    }
    return total;

}

const total = gerShopingTotal(products);
console.log('total ajke khosabe: ', total);

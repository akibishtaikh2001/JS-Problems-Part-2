const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number =  numbers[i];
//     console.log(number);
    
// }

for( const number of numbers){
    // console.log(number);
    
}

const products = [
    {id: 1, name:'xaiomi phone one night', price:19000},
    {id: 2, name:'iPhone', price:19000},
    {id: 3, name:'Mac book', price:119000},
    {id: 4, name:'Lenevo yoga laptop 2025', price:19000},
    {id: 5, name:'Dell inespiron laptop', price:19000},
    {id: 6, name:'Samsumng phone note 7', price:19000},
    {id: 7, name:'Nokia old age phone gone', price:19000},
    {id: 8, name:'one plus phone', price:19000},
    {id: 9, name:'nothing Phone', price:19000},
    {id: 10, name:'Redmi', price:19000},
    {id: 11, name:'M1 chip not cheap LapTop', price:19000},
];


// for(const product of products){
//     console.log(product);
    
// }


function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
        
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);

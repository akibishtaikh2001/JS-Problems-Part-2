// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names){
    let smallest = names [0];
    for(const name of names){
       if(name.length < names.length){
         smallest = name;
       }
        
    }
    return smallest;
}


const small = smallestName(heights2);
console.log(small);

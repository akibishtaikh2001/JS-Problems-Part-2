const dihsa = 56;
const salman = 95;

if(dihsa > salman){
    console.log('Disha will get the strwaberry');
    
}
else{
     console.log('Salman will get the strwaberry');
}

// Inside a function

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(96, 79);
const max2 = getMax(56, 98);
const ultimateMax = getMax(max1, max2);

console.log('max of two is:', ultimateMax);


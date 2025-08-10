const jim = 256;
const tim = 389;
const kim = 168;

if(jim > tim && jim > kim){
    console.log('Jim is the ultimate boss'); 
}

else if(tim > jim && tim > kim){
    console.log('Tim is the boss');  
}

else{
    console.log('Kim is the Kardashian boss');
    
}

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const maxOfBoss = maxOfThree(220, 140, 180);
console.log('The only Boss:', maxOfBoss);


const max = Math.max(12, 1, 56, 5, 65, 8, 1, 99, 2);
console.log("Max isusing Math.max", max);


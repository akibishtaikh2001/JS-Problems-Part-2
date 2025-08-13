function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

function substract(num1, num2){
    return num1 - num2;
}

function mulitiply(num1, num2){
    return num1 * num2;
}

function divided( num1, num2){
    return num1 / num2 ;
}

function calculator(a, b, oparation){
    if(oparation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(oparation === 'subtract'){
        const result = substract (a, b);
        return result;
    }
    else if(oparation === 'multiply'){
        return mulitiply(a, b);
    }
    else if( oparation === 'divide'){
        return divided(a, b);
    }
    else{
        return "Only 'add', 'subtract', 'multiply', 'divide', operation allowed."
    }
}


const result = calculator(5, 7, 'divide');
console.log(result);

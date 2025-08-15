const heights2 = [167, 190, 120, 165, 137];

function getMin(numbers){
    let min = numbers[0];
    for(const number of numbers){
       if(min > number){
          min = number;
       }
        
    }
    return min;
}

const min = getMin(heights2);
console.log(min);

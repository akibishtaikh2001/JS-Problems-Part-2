const height = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers) {
    let max = numbers[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }

    }
    return max;

}

const max = getMax(height);
console.log('max value is', max);
 // homeWork: min number
function getMin(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }

    }
    return min;

}

const min = getMin(height);
console.log('max value is', min);

// 21-1 can you find out who will get the strawberry?

// if(disha > salman){
//     console.log('Disha will get the strawberry');
// }
// else{
//     console.log('Salman will eat the strawberry');
// }

// inside a function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max1 =  getMax(96, 79);
const max2 = getMax(56, 98);
const ultimateMax = getMax(max1, max2);
console.log('max of two is: ', ultimateMax);



//////////////////////////////////////////////////
const heights = [65, 66, 72, 78, 60, 65, 66];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num; 
        }
    }
    return max; 
}

const max = getMax(heights);
console.log('Max value is: ', max);


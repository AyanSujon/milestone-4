// 21-4: Find the cheapest phone from an array of phone object.


const price = [20000, 16000, 50000, 1000000, 12000, 30000, 350000];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min; 
}


const cheap = getMin(price);
console.log('cheapest one is: ', cheap);












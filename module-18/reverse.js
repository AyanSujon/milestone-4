// how to Reverse an Object by push and pop methords

const numbers = [1, 2, 3, 4, 5];

const reversed = [];
for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    // reversed.push(numbers[i]);
    // reversed.pop(numbers[i]);
}
// console.log(reversed);

// how to Reverse an Object by shift and unshift methords

for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    // reversed.unshift(numbers[i]);
}
// console.log(reversed);

// how to Reverse an Object by Negative for loop value

for(let i = numbers.length-1; i>=0; i--){
    // reversed.push(numbers[i]);
}
    // console.log(reversed);

// how to Reverse an Object by for-of loop
for(const num of numbers){
    // console.log(num);
    // reversed.unshift(num);
}
// console.log(reversed);

// how to Reverse an Object by reverse(); Methords
// console.log(numbers);
const result = numbers.reverse();
console.log(numbers);
console.log(result);






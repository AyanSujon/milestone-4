//  21-2 Who is the tallest? Find the max number in an array.

// const heights = [65, 66, 68, 72, 78, 60, 65, 66];

// function getMax(numbers){
//            let max = numbers[0];
//     for( const num of numbers){
//         // console.log(num);
//         if(num > max){
//             max = num;
//         }
//     }
//     return max;

// }
// const max = getMax(heights);
// console.log('max value is: ', max);

// Homwork find minimum number:
const lowest = [65, 66, 68, 72, 78, 60, 65, 66, 5];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const min = getMin(lowest);
console.log('Min number is: ', min);





// Task 2 

function sumOfArray(arr){

    if(Array.isArray(arr) == false){
        return "ïnvalid"; 
    }

    let sum = 0;
    for(let num of arr){
        if(typeof num !== "number"){
            return "Invalid";
        }
        sum = sum + num;
    }
    return sum;
}
let result = sumOfArray([1,2,3]);
console.log(result);






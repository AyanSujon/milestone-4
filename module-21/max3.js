
// find max item within 3 items

// const jim = 56;
// const tim = 89; 
// const kim = 168;


// if(jim > tim && jim > kim ){
//     console.log('Jim is the ultimate boss.');
// }
// else if(tim > jim && tim > kim){
//     console.log('Tim is the boss.');
// }
// else{
//     console.log('Kim is the kardshians boss.');
// }


// inside a function find max item within 3 items

function maxOfThree(num1, num2, num3){
    // do it yourself
    
const jim = num1;
const tim = num2; 
const kim = num3;

if(jim > tim && jim > kim ){
    console.log('Jim is the ultimate boss.');
}
else if(tim > jim && tim > kim){
    console.log('Tim is the boss.');
}
else{
    console.log('Kim is the kardshians boss.');
}

}
const winer = maxOfThree(330, 50, 70,);
console.log(winer); 


// another example
const max = Math.max(12, 1, 56);
console.log('Max is king Math.max ', max);


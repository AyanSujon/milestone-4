// Revision Javascript
/*
// 18-1: Recap: Variable, Array, Object, data Type, Loop & Comdations

1. const > value not going to change.change
2. let > Value might change
3. var > should not use (unless exceptional cases).

*/

// premetive data Type
const price = 500; //number
const name = "kirkir ali khan"; //String
const isPoor = false; //boolean 

// Non-premetive Data Type
const friends = ['Elon', 'Mark', 'Bill', 'Jeff'];
const student = { class: 9, name: 'Tomi Khan', age: 17, address: 'Kochu Khet'};

// Condation (if-else)
const price2 = 1500;
if(price2 > 1000){
    console.log('too expensive. not for me.');
}
else if(price2 > 500){
    console.log('May me i can buy this.')
}
else{
    console.log('within my budget.');
}

// while Loop
let pushUp = 0;
while(pushUp <10){
    console.log('Push Up');
    //pushUp = pushUp + 1;
    // pushUp += 1;
    pushUp++;
}

// For Loop
for(let i = 0; i < 10; i++){
    console.log(i);
}


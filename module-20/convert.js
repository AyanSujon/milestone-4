// 202 Unit Convert Inch to Feet, Miles to Kilometre

// 12 inch 1 Feet


function inchToFeet(inch){
    const feet = inch / 12; 
    return feet;
}
const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

// 12 inch 1 Feet (Another example)
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch';
    return result;
}
const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);


// Mile to Kelometer convert 

function mileToKilometer(mile){
    const kilometer = mile * 1.60934;
    return kilometer;
}
const kilometer = mileToKilometer(1);
// console.log(kilometer);


// Mile to kelometer convert another example\
function mileToKilometer2(mile){
    const kilometer = mile * 1.60934;
    return kilometer;
}




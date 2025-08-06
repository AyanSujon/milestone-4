// 18_4: Sort Arry in Ascending & Descending Order (Manual & Sort() Methord)


const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// numbers.sort();
// console.log(numbers);

// sorting string by Assinding value 

const friends = ['sakib', 'nokib', 'akib', 'rakib0', 'bakib'];

// friends.sort();
// console.log(friends);


// sorting number type data by assinding and Decending value
const ages = [1, 5, 100, 15, 8, 2, 28];
// console.log(ages);
// ages.sort();
// console.log(ages);

// Assinding Sorting
// const sorted_ages = ages.sort(function(a, b){return a - b});
// console.log(sorted_ages);

// Desending Sorting
const sorted_ages = ages.sort(function(a, b){return b - a});
console.log(sorted_ages);









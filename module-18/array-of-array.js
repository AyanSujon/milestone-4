// Array Of Array 

const numbers = [1, 2, 3, 4, 5, 6];

const tournament_runs = [[], [], []];

const exam_marks = [
    [98, 87, 45, 12, 63],
    [54, 89, 74, 23, 11],
    [45, 87, 12, 56, 45],
    [78, 65, 32, 87, 54]
];

// console.log(numbers[0]);
// console.log(exam_marks[0]);
// const first_class_marks = exam_marks[0];
// console.log(first_class_marks[0]);
// console.log(exam_marks[0][0]);

// change a value in the array of array 
// exam_marks[0][1] = 66;
// exam_marks[1].pop();
// exam_marks[1].push(44);
// console.log(exam_marks);


// change value by for-of loop 

for(const marks of exam_marks){
    console.log(marks);
}








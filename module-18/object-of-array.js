// 18_5: Array of Objects And Access Object inside an Array

// Object of Array

const numbers = [1, 2, 43, 54, 4];
const players = [{}, {}, {}];
const employees = [
    {name: 'Ashik', designation: 'Content Writer', salary: 25000},
    {name: 'Atik', designation: 'Developer', salary: 29000},
    {name: 'Abdul Rahim', designation: 'Digital Marketer', salary: 21000}
]

// how to find a value of the Array of Objects by array index value
// console.log(employees[0]);
// console.log(employees[1].salary);

// how to find a value of the Array of Objects by for-of loop

for(const employee of employees){
    // console.log(employee);
}
// another example of for-of loop
for(const employee of employees){
    // console.log(employee.salary, employee.designation);
}

// another example
for(const emp of employees){
    const person = emp; 
    const personInfo = person.name + ': ' + person.salary;

    console.log(personInfo);
}



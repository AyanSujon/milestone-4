// willSuccess Problem 2

/*function signature/sample */
function willSuccess( marks ) {
// You have to write your code here
let pass = 0;
let fail = 0; 

if( !Array.isArray(marks)){
    return "Invalid";
    }
if(marks.length === 0){
    return false;
}
for( let mark of marks ){
    if( typeof mark === "number" && mark >= 50){
        pass++;
    }
    else{
        fail++;
    }
}
return pass > fail;

}



let output = willSuccess([60, 70, 80, 40, 30]);

console.log(output);



// validContact Problem 2

// function validContact(contact){
//     if(contact.length !== 11){
//         return false; 
//     }
//     if(contact.startsWith('01') == false){
//         return false;
//     }
//     if(contact.includes(" ") == true){
//         return false;
//     }
//     return true
// }



// let output = validContact(true);
// console.log(output);



// another Example:

function validContact(contact){
    if( typeof contact !== "string"){
        return "Invalid";
    }
    if(contact.length == 11 && contact.startsWith("01") == true && contact.includes(" ") != true){
        return true;
    }
    else{
        return false;
    }
}

let output2 = validContact(["01987654321"]);
console.log(output2);

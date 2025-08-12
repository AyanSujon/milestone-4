// CashOut Problem 1 

/*function signature/sample */ 
function cashOut( money ) { 
          // You have to write your code here 
    if(money < 0 || typeof money !== "number"){
        return "Invalid";
    }
          let charge = (money * 1.75) / 100;
        //   let fixedCharge = charge.toFixed(2); // if value arrive more then 2 decimial them exicatue this code. 
        // let finalCharge = parseFloat();
          return charge;
}
console.log(cashOut(100));


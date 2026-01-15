function loanEligibility(customerName,creditscore,income,isEmployed,DTIratio){
if(creditscore >750){
console.log("loan is automatically approved");
console.log("loan is automatically approved for:" +customerName);
}
else if(creditscore >=650 &&creditscore <=700 && income >=50000 && isEmployed &&DTIratio <=40 ){
    console.log("loan is automatically approved");
    console.log("loan is automatically approved for:" +customerName);
}
else{
    console.log("loan is denied");
    console.log("loan is denied for:" +customerName);
}
}
loanEligibility("John Doe",720,4 5000,true,35000);
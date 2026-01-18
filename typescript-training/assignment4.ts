function Transactions()
 { 
    //local scope
   // let bankTransactions: number[];
let bankTransactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
 let totalCreditTransactions = 0;
 let totalDebitTransactions = 0;
 let totalAmountCredited = 0;
 let totalAmountDebited = 0;
 let suspiciousCount = 0; 
for (let i: number = 0; i < bankTransactions.length; i++) 
{ 
let amount = bankTransactions[i]; 
//since its throwing error and telling amount is undefined  adding below checkpoint
if (amount !== undefined) {
    if(amount >0){
        totalCreditTransactions++;
        totalAmountCredited=totalAmountCredited+amount;
       // console.log("total amount credited:" +totalAmountCredited);
    }
    else{
        totalDebitTransactions++;
        totalAmountDebited =totalAmountDebited+amount;
         //console.log("total amount debited:" +totalAmountDebited);
    }
    //suspicious amount
if(amount >10000 || amount <-10000){
    //console.log("Suspicious credit/ debitTransaction with Amount");
    suspiciousCount++;
}
}


}
// Print results 
console.log("Total Credit Transactions:", totalCreditTransactions);
console.log("Total Debit Transactions:", totalDebitTransactions); 
console.log("Total Amount Credited:", totalAmountCredited); 
console.log("Total Amount Debited:", totalAmountDebited); 
console.log("Remaining Balance:", totalAmountCredited +totalAmountDebited); 
console.log("Total Suspicious Transactions:", suspiciousCount);

 }
 Transactions();

function PersonEligibilityLoan(customerName, creditScore, income, isEmployed, debtToIncomeRatio) 
{ 
if(creditScore>750){
    console.log("loan is approved automatically");
     console.log("loan is approved automatically for:" +customerName);
    }
    else if(creditScore>=650 && creditScore<=750){
        if(income >=50000){
            if(isEmployed){

                if(debtToIncomeRatio<40){
                     console.log("loan is approved automatically");
     console.log("loan is approved automatically for:" +customerName);
                }
                else{
                     console.log("loan is denied ");
     console.log("loan is denied because of DTI ratio for:" +customerName);
                }
            }
                  else{
                     console.log("loan is denied ");
     console.log("loan is denied because User is Unemployed for:" +customerName);
                }
            }
                else{
                     console.log("loan is denied ");
     console.log("loan is denied because User income is lesser than 55000 for:" +customerName);
                }
            }
                 else{
                     console.log("loan is denied ");
     console.log("loan is denied because User creditscore less than 650 for:" +customerName);
                }
            
}

PersonEligibilityLoan("john Doe",720,55000,true,35);

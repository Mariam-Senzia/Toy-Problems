function grossSalary(basicSalary,benefits) {
    const payee = function(grossSalary) {
        switch(true) {
            case grossSalary <= 24000:
                return grossSalary * 0.1
            case grossSalary >=24001 && grossSalary <= 32333:
                return grossSalary * 0.25;
            case grossSalary >= 32334 && grossSalary <=500000:
                return grossSalary * 0.30;
            case grossSalary >=500001 && grossSalary <=800000:
                return grossSalary * 0.35;
            case grossSalary >=800000 :
                return grossSalary * 0.35;
        }
    }
    const nhifCalculator = function(grossSalary){
        return grossSalary * 0.275;
    }
    const nssfCalculator = function(grossSalary){
        if ( grossSalary <= 18000 ){
            return grossSalary * 0.6
        } 
        else {
            return 0
        }
    }
    
    const grosssalary = basicSalary + benefits;
        const payeeDeductions = payee(grosssalary)
        const nhifDeductions = nhifCalculator(grosssalary)
        const nssfDeductions = nssfCalculator(grosssalary)
    
    const netsalary = grossSalary -(payeeDeductions + nhifDeductions + nssfDeductions)
    
    return {Payee: payeeDeductions,
            Nhif : nhifDeductions,
            Nssf : nssfDeductions,}
    

}

console.log(grossSalary(100000,20000));
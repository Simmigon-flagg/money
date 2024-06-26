// TO-DO Use this income variable to run the
// program for all tax values
// from 50k - 300k
let incomes = [130000];

function payout(money) {  
    // console.log("\tMonthly:\t$", (money / 12).toFixed(2));
    // console.log("\tSemi-monthly:\t$", (money / 24).toFixed(2));
    // console.log("\tBi-weekly:\t$", (money / 26).toFixed(2));
    // console.log("\tweekly:\t\t$", (money / 52).toFixed(2));
    // console.log("\tday:\t\t$", (money / 52 / 5).toFixed(2));
    // console.log("\thour:\t\t$", (money / 52 / 40).toFixed(2));  
}


/**
 * What are the standard deductions?
 * The standard deduction reduces your taxable income
 * leading to a lower 
 * federal tax bill. The following tables represent
 * the standard deductions in different tax brackets.
 * If your standard deduction exceeds
 * the total of the itemized deductions,
 * it makes sense to claim the standard deduction.
 */
let standardDeductions = 12950;
// Standard deduction based on filing status
const standardDeduction = {
    single: 12950,
    married: 7100,
    headOfHousehold: 0
};

let singleAdjustedGrossIncome = incomes[0] - standardDeductions;

const socialsecuritytax = incomes[0] * .062;
const medicaretax = incomes[0] * .0145;

console.log("------------------------------------------");

console.log("Yearly Gross:\t\t      $", incomes[0].toFixed(2));
payout(incomes[0]);
socialSecurityTax();
payout(socialsecuritytax);

function socialSecurityTax() {
    console.log("Yearly Social Security Tax:\t$", socialsecuritytax.toFixed(2));
    
}

function medicareTax() {
    if (medicaretax > 200000) {
        medicaretax *= .009;
    }

    console.log("Yearly Medicare:\t\t$", medicaretax.toFixed(2));
}

medicareTax();
payout(medicaretax);

const fica = socialsecuritytax + medicaretax;

console.log("------------------------------------------");
console.log("");
console.log("");
// console.log("Yearly FICA:\t\t\t$", fica.toFixed(2));
// payout(fica)
console.log("------------------------------------------");
console.log("Yearly Taxable Income AGI:    $", (singleAdjustedGrossIncome).toFixed(2));
payout(singleAdjustedGrossIncome);

function calculateGeorgiaIncomeTax(filingStatus) {
     
    // Define Georgia state tax brackets for 2022
    const georgiaTaxBrackets = [
        { min: 1, max: 750, rate: 0.01 },
        { min: 751, max: 2250, rate: 0.02 },
        { min: 2251, max: 3750, rate: 0.03 },
        { min: 3751, max: 5250, rate: 0.04 },
        { min: 5251, max: 7000, rate: 0.05 },
        { min: 7001, max:100772, rate: 0.0575 },        
    ];

    // Georgia standard deduction
    // $5,400 and those married filing jointly could deduct $7,100
    const personalExemption = 2700; // Georgia doesn't have a standard deduction
    const georgiaStandardDeduction = 4600 + personalExemption; // Georgia doesn't have a standard deduction
    // Subtract the standard deduction from the income

    // const taxableIncome = Math.max(income[0] - standardDeduction[filingStatus.toLowerCase()], 0);
    const taxableIncome = Math.max(incomes[0] - georgiaStandardDeduction, 0);
    // Subtract the standard deduction from the income
    // const taxableIncome = Math.max(income - georgiaStandardDeduction, 0);

    // Calculate Georgia state income tax
    // 
    let remainingIncome = taxableIncome;
    let georgiaTax = 0;

    for (const bracket of georgiaTaxBrackets) {
        if (remainingIncome <= 0) {
            break;
        }


        const taxableAmount = Math.min(remainingIncome, bracket.max - bracket.min);
        georgiaTax += taxableAmount * bracket.rate;
        remainingIncome -= taxableAmount;
    }

    return georgiaTax;
}

const rates = [.1, .12, .22, .24, .32, .35, .37];

const single = {
    bracket: {
        startRange: [0, 9701, 39476, 84201, 160726, 204101, 510301],
        endRange: [9700, 39475, 84200, 160725, 204100, 510301, 1],
    }
};

const married = {
    bracket: {
        startRange: [0, 9701, 39476, 84201, 160726, 204101, 510301],
        endRange: [9700, 39475, 84200, 160725, 204100, 510301, 510302],
    }
};

const single2022 = {
    bracket: {
        startRange: [0, 10276, 41776, 89076, 170051, 215951, 539901],
        endRange: [10275, 41775, 89075, 170050, 215950, 539900, 1],
    }
};

const married2022 = {
    bracket: {
        startRange: [0, 20551, 83551, 178151, 340101, 431901, 647851],
        endRange: [20550, 83550, 178150, 340100, 431900, 647850, 1],
    }
};

function calculateSinglesBrackets2022(singleAdjustedGrossIncome) {
    let sum = 0;
    // console.log("Gross income " + incomes[0]);
    // console.log("Standard deduction " + incomes[0] + " - " + (standardDeductions) + " = " + singleAdjustedGrossIncome);
    // console.log();
    // console.log("Single Adjusted Gross Income " + singleAdjustedGrossIncome);
    // console.log();
    // console.log("You will pay taxes on $" + (singleAdjustedGrossIncome) + " dollars");

    console.log("");
    // console.log("Below are your 2022 tax bracket");
    for (let index = 0; index < single2022.bracket.startRange.length; index++) {
        if (single2022.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome >= single2022.bracket.endRange[index]) {
            const money = single2022.bracket.endRange[index] - single2022.bracket.startRange[index]
            // console.log(rates[index] + "\t" + single2022.bracket.startRange[index] + "\t" + single2022.bracket.endRange[index] + "\t" + (money.toFixed(2)));

        }
        if (single2022.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome <= single2022.bracket.endRange[index]) {
            const money = singleAdjustedGrossIncome - single2022.bracket.startRange[index]
            // console.log(rates[index] + "\t" + single2022.bracket.startRange[index] + "\t" + single2022.bracket.endRange[index] + "\t" + (money.toFixed(2)));

        }
        // console.log(index + "\t" + rates[index] + );        
    }
    console.log();
    // console.log("Rates: ");
    // console.log("Your calculated rates for 2022");

    for (let index = 0; index < single2022.bracket.startRange.length; index++) {
        let taxes = 0;
        if (single2022.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome >= single2022.bracket.endRange[index]) {
            // 9700                         - 0
            const money = single2022.bracket.endRange[index] - single2022.bracket.startRange[index];
            taxes = (rates[index] * money);

            // console.log(rates[index] + "\t\t\t" + taxes.toFixed(2));
            sum += taxes;
        }
        if (single2022.bracket.startRange[index] <= singleAdjustedGrossIncome && singleAdjustedGrossIncome <= single2022.bracket.endRange[index]) {
            const money = singleAdjustedGrossIncome - single2022.bracket.startRange[index];
            taxes = (rates[index] * money);

            // console.log(rates[index] + "\t\t\t" + taxes.toFixed(2));
            sum += taxes;

        }
        // console.log(index + "\t" + rates[index] + );

    }

    // const totalTaxDue = (sum).toFixed(2);
    // const months6 = (sum / 2).toFixed(2);
    // const months4 = (sum / 3).toFixed(2);
    // const months3 = (sum / 4).toFixed(2);
    // const monthly = (sum / 12).toFixed(2);
    // const biWeekly = (sum / 26).toFixed(2);
    // const week = (sum / 52).toFixed(2);


    const afterTax = incomes[0] - sum;
    console.log("After Tax\t\t", afterTax);
    console.log("Federal Tax:\t        $%d", sum);
    // console.log("Yearly federal taxes: $%d - $%d = $%d", incomes[0], sum, afterTax);
    // console.log("After Tax");
    // console.log("");
    // console.log("Pay Check:");
    // console.log("Year        \t\ttax        \tMonth        \ttax        \tBi Weekly\ttax        \tWeek        \ttax");
    // console.log(afterTax.toFixed(2) + "\t\t" + totalTaxDue + "\t" + (afterTax / 12).toFixed(2) + "\t\t" + monthly + "\t\t" + (afterTax / 26).toFixed(2) + "\t\t" + biWeekly + "\t\t" + (afterTax / 52).toFixed(2) + "\t\t" + week);

    // console.log("");
    // console.log("50/20/30 Rule");
    // console.log("");
    // console.log("50: Housing        \ttax        \tMonth        \ttax        \tBi Weekly\ttax        \tWeek        \ttax");
    // console.log(afterTax.toFixed(2) * .50 + "\t\t" + "$00.00" + "\t\t" + (afterTax / 12).toFixed(2) * .50 + "\t\t" + "$00.00" + "\t\t" + (afterTax / 26).toFixed(2) * .50 + "\t\t" + "$00.00" + "\t\t" + (afterTax / 52).toFixed(2) * .50 + "\t" + "$00.00");
    // console.log("");

    // console.log("20: Savings        \ttax        \tMonth        \ttax        \tBi Weekly\ttax        \tWeek        \ttax");
    // console.log(afterTax.toFixed(2) * .20 + "\t\t" + "$00.00" + "\t\t" + ((afterTax / 12) * .20).toFixed(2) + "\t\t" + "$00.00" + "\t\t" + (afterTax / 26).toFixed(2) * .20 + "\t\t" + "$00.00" + "\t\t" + (afterTax / 52).toFixed(2) * .20 + "\t\t" + "$00.00");

    // console.log("");
    // console.log("30: Extra        \ttax        \tMonth        \ttax        \tBi Weekly\ttax        \tWeek        \ttax");
    // console.log(afterTax.toFixed(2) * .30 + "\t\t" + "$00.00" + "\t\t" + ((afterTax / 12) * .30).toFixed(2) + "\t\t" + "$00.00" + "\t\t" + ((afterTax / 26) * .30).toFixed(2) + "\t\t" + "$00.00" + "\t\t" + ((afterTax / 26) * .30).toFixed(2) + "\t\t" + "$00.00");



    // console.log("");
    // console.log("");

    // console.log("Taxes owed at these intervals");
    // console.log("6 months:\t" + months6);
    // console.log("4 months:\t" + months4);
    // console.log("3 months:\t" + months3);
    return sum;
}

const federalTax = calculateSinglesBrackets2022(singleAdjustedGrossIncome);
// payout(federalTax)

const georgiaStateTax = calculateGeorgiaIncomeTax("Single");

const taxBurden = federalTax + 7475;

const netpay = incomes[0] - taxBurden;

console.log("GA State Tax:  \t\t ", georgiaStateTax.toFixed(2));
// payout(georgiaStateTax)
console.log("Tax:\t\t       $", taxBurden.toFixed(2));
// payout(taxBurden)
console.log("Net Pay:\t\t", netpay);
// payout(netpay)


const housingCost = (housing) => {
    console.log("Housing:\t\t\t$", (housing).toFixed(2));


    // obtain values
    console.log();
    const loan = 275000;
    console.log("loan amount : ", loan);
    //  loan = console.nextDouble();
    // int years = console.nextInt();
    const years = 30;
    console.log("number of years : ", years);
    //  rate = console.nextDouble();
    const rate = 6.75;
    console.log("interest rate : ", rate);
    console.log();

    // compute result and report
    const n = 12 * years;
    const c = rate / 12.0 / 100.0;
    const payment = loan * c * Math.pow(1 + c, n) / (Math.pow(1 + c, n) - 1);

    console.log("Home Payment:\t\t\t$", (payment).toFixed(2));
    const afterhousingCost = netpay - (payment * 12);
    console.log("Remaining Check:\t\t$", (afterhousingCost).toFixed(2));
    // console.log("Remaining Check:\t\t\t\t$", (netpay / payment).toFixed(2));

    return afterhousingCost;


}


const moneybreakdown = () => {
    console.log("Check Stub breakdown");
    console.log("---------------------------------");
    console.log("");
    const housing = netpay * 0.50;
    const saving = netpay * 0.20;
    const extra = netpay * 0.30;
    const investing = netpay * 0.00;
    // const houseAfford = housingCost(housing);
    console.log("Housing:\t$", (housing).toFixed(2));
    payout(housing)
    console.log("");
    console.log("Saving:\t\t$", (saving).toFixed(2));
    payout(saving)
    console.log("");
    console.log("Extra:\t\t$", (extra).toFixed(2));
    payout(extra)
    console.log("");
    console.log("---------------------------------");
    console.log("Mortage:");
}
// moneybreakdown()